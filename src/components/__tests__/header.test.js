import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../header';
import { LogInProvider } from '../logInContext';

test('renders the heading', () => {
  // you need to wrap the component in a router because it contains
  // a Link component. Without being wrapped, the test won't run
  render(
    <Router>
      <Header />
    </Router>
  );
  expect(screen.getByText('Chitter')).toBeInTheDocument();
});

test.skip('renders the welcome string when youre logged in', () => {
  const contextValue = [
    { handle: 'Bob' },
    'a',
    () => {
      return true;
    },
  ];

  render(
    <Router>
      <LogInProvider>
        <Header />
      </LogInProvider>
    </Router>
  );

  expect(screen.getByText('Welcome Phil')).toBeInTheDocument();
});
