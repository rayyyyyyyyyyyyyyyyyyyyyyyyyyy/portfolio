import { useId, useState } from 'react';
import { Send } from 'lucide-react';
import './ContactForm.css';

const MAX_LEN = 2000;

/* The messenger compose box. Posts to the /api/contact serverless function. */
function ContactForm({ onSent }) {
  const id = useId();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState('');
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrors({});
    setFormError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message, website }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.ok) {
        onSent({ email: email.trim(), message: message.trim() });
        setMessage('');
        setStatus('sent');
        return;
      }
      if (data.errors) setErrors(data.errors);
      setFormError(data.error || (data.errors ? '' : 'Could not send right now. Please email me directly.'));
    } catch {
      setFormError('Could not send right now. Please email me directly.');
    }
    setStatus('idle');
  };

  const sending = status === 'sending';

  return (
    <form className="compose" onSubmit={submit} noValidate>
      <div className="compose__field">
        <label htmlFor={`${id}-email`}>Your email</label>
        <input
          id={`${id}-email`}
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={errors.email ? 'true' : undefined}
          aria-describedby={errors.email ? `${id}-email-err` : undefined}
          required
        />
        {errors.email && <p className="compose__error" id={`${id}-email-err`}>{errors.email}</p>}
      </div>

      <div className="compose__field">
        <label htmlFor={`${id}-msg`}>Message</label>
        <textarea
          id={`${id}-msg`}
          rows={4}
          maxLength={MAX_LEN}
          value={message}
          onChange={(e) => { setMessage(e.target.value); if (status === 'sent') setStatus('idle'); }}
          aria-invalid={errors.message ? 'true' : undefined}
          aria-describedby={`${id}-msg-help${errors.message ? ` ${id}-msg-err` : ''}`}
          required
        />
        <p className="compose__help" id={`${id}-msg-help`}>{message.length} / {MAX_LEN}</p>
        {errors.message && <p className="compose__error" id={`${id}-msg-err`}>{errors.message}</p>}
      </div>

      {/* honeypot: hidden from people, tempting to bots */}
      <div className="compose__trap" aria-hidden="true">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>

      <div className="compose__footer">
        <button type="submit" className="btn compose__send" disabled={sending}>
          <Send size={17} aria-hidden="true" /> {sending ? 'Sending...' : 'Send'}
        </button>
        <p className="compose__status" role="status" aria-live="polite">
          {status === 'sent' && 'Message sent! I will reply to your email soon.'}
          {formError && <span className="compose__error">{formError}</span>}
        </p>
      </div>
    </form>
  );
}

export default ContactForm;
