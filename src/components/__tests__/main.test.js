import React from 'react';
import {
  fireEvent,
  render,
  screen,
  cleanup,
  act,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from '../main';
import LoginContext from '../loginContext';

beforeAll(() => {
  fetch.mockResponse(JSON.stringify([]));
});

afterEach(cleanup);

// wrapping the component in Router ensures that the links in the header within
// main work properly. Without doing this the test will crash
test('renders the peeps list when the current path is / or /peeps', async () => {
  await act(async () => {
    render(
      <Router>
        <LoginContext.Provider
          value={[
            '',
            null,
            () => {
              return true;
            },
          ]}
        >
          <Main />
        </LoginContext.Provider>
      </Router>
    );
  });

  expect(screen.getByText('Peeps')).toBeInTheDocument();
});

test('renders signup/login when you click the link', async () => {
  await act(async () => {
    render(
      <Router>
        <LoginContext.Provider
          value={[
            '',
            null,
            () => {
              return false;
            },
          ]}
        >
          <Main />
        </LoginContext.Provider>
      </Router>
    );
  });

  fireEvent.click(screen.getByText('Sign up/Log in'));
  expect(screen.getByLabelText('Name:')).toBeInTheDocument();
});

test('renders new peep when you click the new peep link', async () => {
  await act(async () => {
    render(
      <Router>
        <LoginContext.Provider
          value={[
            '',
            null,
            () => {
              return true;
            },
          ]}
        >
          <Main />
        </LoginContext.Provider>
      </Router>
    );
  });

  fireEvent.click(screen.getByText('New Peep'));
  expect(screen.getByLabelText('Text:')).toBeInTheDocument();
});
