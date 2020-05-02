import React from 'react';
import { render, screen } from '@testing-library/react';
import SignUp from '../signUpLogIn';

test('renders the input boxes and labels', () => {
  render(<SignUp />);
  expect(screen.getByLabelText('Name:')).toBeInTheDocument();
  expect(screen.getByLabelText('Password:')).toBeInTheDocument();
});

test('renders the buttons', () => {
  render(<SignUp />);
  const buttons = screen.getAllByRole('button');
  expect(buttons[0]).toHaveTextContent('Sign up');
  expect(buttons[1]).toHaveTextContent('Log in');
});
