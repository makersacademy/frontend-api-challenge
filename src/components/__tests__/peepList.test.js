import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PeepList from '../peepList';

// the anonmyous function has to be async so we can use await
test('renders the two peeps in the list', async () => {
  // mocks the next call to fetch, returning the argument specified
  fetch.mockResponseOnce(JSON.stringify([
    {
      id: '1',
      body: 'This is a peep',
      user: { id: '1', handle: 'Phil' },
    },
    {
      id: 2,
      body: 'This is also a peep',
      user: { id: 2, handle: 'Su' },
    },
  ]));

  render(<PeepList />);

  // await waitFor is needed because component being tested has an asynchronous call using fetch
  // without this the test will complete before the fetch call does, which fails the test
  await waitFor(() => expect(screen.getByText('This is a peep')).toBeInTheDocument());
  expect(screen.getByText('This is also a peep')).toBeInTheDocument();
});
