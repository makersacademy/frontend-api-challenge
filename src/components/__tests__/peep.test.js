import React from 'react';
import { render, screen } from '@testing-library/react';
import Peep from '../peep';

test('renders the peep', () => {
  render(<Peep text="This is a peep" userHandle="Phil" />);
  expect(screen.getByText('This is a peep')).toBeInTheDocument();
  expect(screen.getByText('Phil')).toBeInTheDocument();
});
