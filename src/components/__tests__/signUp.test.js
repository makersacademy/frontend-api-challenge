import React from 'react';
import { render, screen } from '@testing-library/react';
import SignUp from '../signUp';

test('renders the signup heading', () => {
  render(<SignUp />);
  expect(screen.getByText('Sign up')).toBeInTheDocument();
});
