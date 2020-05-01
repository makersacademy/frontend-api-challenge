import React from 'react';
import { render, screen } from '@testing-library/react';
import Peep from './peep';

test('renders "This is a peep"', () => {
  render(<Peep />);
  expect(screen.getByText('This is a peep'));
});
