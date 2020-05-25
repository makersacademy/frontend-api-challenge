import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../header';
import LoginContext from '../loginContext';

test('renders the heading', () => {
  // you need to wrap the component in a router because it contains
  // a Link component. Without being wrapped, the test won't run
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
        <Header />
      </LoginContext.Provider>
    </Router>
  );
  expect(screen.getByText('Chitter')).toBeInTheDocument();
});

test('renders the login/signup link when not logged in', () => {
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
        <Header />
      </LoginContext.Provider>
    </Router>
  );
  expect(screen.getByText('Sign up/Log in')).toBeInTheDocument();
});

test('renders the welcome message when logged in', () => {
  render(
    <Router>
      <LoginContext.Provider
        value={[
          { handle: 'Phil' },
          null,
          () => {
            return true;
          },
        ]}
      >
        <Header />
      </LoginContext.Provider>
    </Router>
  );
  expect(screen.getByText('Welcome Phil')).toBeInTheDocument();
});

test('renders the new peep link when logged in', () => {
  render(
    <Router>
      <LoginContext.Provider
        value={[
          { handle: 'Phil' },
          null,
          () => {
            return true;
          },
        ]}
      >
        <Header />
      </LoginContext.Provider>
    </Router>
  );
  expect(screen.getByText('New Peep')).toBeInTheDocument();
});
