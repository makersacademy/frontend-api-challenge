import React from 'react';
import { render, screen } from '@testing-library/react';
import SignUp from '../signUpLogIn';

test('renders the heading', () => {
  render(<SignUp />);
  expect(screen.getByText('Sign up or Log in')).toBeInTheDocument();
});
