import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../header';

test('renders the heading', () => {
  render(<Header />);
  expect(screen.getByText('Chitter')).toBeInTheDocument();
});
