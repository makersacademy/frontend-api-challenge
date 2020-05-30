import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from '../main';
import LoginContext from '../loginContext';

describe('Main component', () => {
  test('renders the peeps list when the current path is / or /peeps', async () => {
    fetch.mockResponse(JSON.stringify([]));

    render(
      <Router>
        <LoginContext.Provider value={['', null, () => { return true; }]}>
          <Main />
        </LoginContext.Provider>
      </Router>
    );

    await waitFor(() => expect(screen.getByText('Peeps')).toBeInTheDocument());
  });

  test('renders signup/login when you click the link', async () => {
    fetch.mockResponse(JSON.stringify([]));

    render(
      <Router>
        <LoginContext.Provider value={['', null, () => { return false; }]}>
          <Main />
        </LoginContext.Provider>
      </Router>
    );

    await waitFor(() => expect(screen.getByText('Peeps')).toBeInTheDocument());
    fireEvent.click(screen.getByText('Sign up/Log in'));
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
  });

  test('renders new peep when you click the new peep link', async () => {
    fetch.mockResponse(JSON.stringify([]));

    render(
      <Router>
        <LoginContext.Provider value={['', null, () => { return true; }]}>
          <Main />
        </LoginContext.Provider>
      </Router>
    );

    await waitFor(() => fireEvent.click(screen.getByText('New Peep')));
    expect(screen.getByLabelText('Text:')).toBeInTheDocument();
  });

  test.skip('renders an individual peep when you click on it in the peep list', async () => {
    fetch.mockResponse(
      JSON.stringify([
        {
          id: 3,
          body: 'my first peep',
          created_at: '2018-06-23T13:21:23.317Z',
          updated_at: '2018-06-23T13:21:23.317Z',
          user: {
            id: 1,
            handle: 'Phil',
          },
          likes: [
            {
              user: {
                id: 1,
                handle: 'Phil',
              },
            },
          ],
        },
      ])
    );

    render(
      <Router>
        <LoginContext.Provider value={['', null, () => { return true; }]}>
          <Main />
        </LoginContext.Provider>
      </Router>
    );

    await waitFor(() => fireEvent.click(screen.getByText('my first peep')));
  });
});
