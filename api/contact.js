/*
  POST /api/contact  (Vercel serverless function)

  Body: { email, message, website }
    - website is a honeypot: real visitors never see it, bots fill it in.

  Sends the message to CONTACT_TO_EMAIL through the Resend API.
  Required environment variables (set them in Vercel, never commit them):
    RESEND_API_KEY     API key from resend.com
    CONTACT_TO_EMAIL   inbox that receives the messages
*/

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;
const MIN_LEN = 10;
const MAX_LEN = 2000;

// Best-effort rate limit: 5 messages per IP per 10 minutes.
// It lives in memory, so it resets whenever Vercel starts a fresh instance.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function validate({ email, message }) {
  const errors = {};
  if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.';
  if (message.length < MIN_LEN) errors.message = `Please write at least ${MIN_LEN} characters.`;
  else if (message.length > MAX_LEN) errors.message = `Please keep it under ${MAX_LEN} characters.`;
  return errors;
}

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {};
  const email = String(body.email || '').trim();
  const message = String(body.message || '').trim();

  // Honeypot filled in: pretend it worked so the bot moves on.
  if (body.website) return res.status(200).json({ ok: true });

  const errors = validate({ email, message });
  if (Object.keys(errors).length) return res.status(400).json({ errors });

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many messages. Please try again later or email me directly.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error('contact: RESEND_API_KEY or CONTACT_TO_EMAIL is not set');
    return res.status(500).json({ error: 'The form is not set up yet. Please email me directly.' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Portfolio contact <onboarding@resend.dev>',
        to: [to],
        reply_to: email,
        subject: `Portfolio message from ${email}`,
        text: `From: ${email}\n\n${message}`,
      }),
    });

    if (!response.ok) {
      console.error('contact: Resend responded', response.status, await response.text());
      return res.status(502).json({ error: 'Could not send right now. Please email me directly.' });
    }
  } catch (err) {
    console.error('contact: request to Resend failed', err);
    return res.status(502).json({ error: 'Could not send right now. Please email me directly.' });
  }

  return res.status(200).json({ ok: true });
}

module.exports = handler;
module.exports.validate = validate;
