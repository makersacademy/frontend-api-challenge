import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from '../main';

beforeAll(() => {
  fetch.mockResponse(JSON.stringify([]));
});

// wrapping the component in Router ensures that the links in the header within
// main work properly. Without doing this the test will crash
test('renders the peeps list when the current path is / or /peeps', async () => {
  render(<Router><Main /></Router>);
  await waitFor(() => expect(screen.getByText('Peeps')).toBeInTheDocument());
});

test('renders signup when you click the signup link', async () => {
  render(<Router><Main /></Router>);

  // you have to wait here for the peeps to load, otherwise the test will crash
  await waitFor(() => expect(screen.getByText('Peeps')));

  fireEvent.click(screen.getByText('Sign up/Log in'));
  expect(screen.getByText('Sign up or Log in')).toBeInTheDocument();
});
