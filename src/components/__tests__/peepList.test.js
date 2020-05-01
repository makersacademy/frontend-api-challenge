import React from 'react';
import { render, screen } from '@testing-library/react';
import PeepList from '../peepList';

test('renders the two peeps in the list', () => {
  render(<PeepList />);
  expect(screen.getByText('This is a peep')).toBeInTheDocument();
  expect(screen.getByText('This is also a peep')).toBeInTheDocument();
});
