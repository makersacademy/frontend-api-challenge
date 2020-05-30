import React from 'react';
import { render, screen } from '@testing-library/react';
import NewPeep from '../newPeep';

describe('basic rendering', () => {
  test('renders the input boxes and labels', () => {
    render(<NewPeep />);
    expect(screen.getByLabelText('Text:')).toBeInTheDocument();
  });
});
