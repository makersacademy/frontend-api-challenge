import React from 'react';
import { render, screen } from '@testing-library/react';
import SignUp from '../signUpLogIn';

test('renders the heading', () => {
  render(<SignUp />);
  expect(screen.getByLabelText('Name:')).toBeInTheDocument();
  expect(screen.getByLabelText('Password:')).toBeInTheDocument();
});
