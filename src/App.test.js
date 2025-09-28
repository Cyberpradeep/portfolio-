import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test("renders hero headline", () => {
  render(<App />);
  const heroHeading = screen.getByText(/Hi, I'm Pradeep Selladurai/i);
  expect(heroHeading).toBeInTheDocument();
});
