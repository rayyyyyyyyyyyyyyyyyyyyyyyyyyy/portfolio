import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  global.IntersectionObserver = class {
    observe() {}
    disconnect() {}
  };
});

test('renders the name and the RoadSense project', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /onuma\s*dokpikul/i })).toBeInTheDocument();
  expect(screen.getByRole('tab', { name: 'Overview' })).toHaveAttribute('aria-selected', 'true');
});
