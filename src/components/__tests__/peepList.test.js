import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PeepList from '../peepList';

test('renders the two peeps in the list', async () => {
  fetch.mockResponseOnce(JSON.stringify([{ id: '1', body: 'This is a peep' }, { id: 2, body: 'This is also a peep' }]));

  render(<PeepList />);
  await waitFor(() => expect(screen.getByText('This is a peep')).toBeInTheDocument());
  expect(screen.getByText('This is also a peep')).toBeInTheDocument();
});
