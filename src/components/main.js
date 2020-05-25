import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';

import Header from './header';
import PeepList from './peepList';
import SignUpLogIn from './signUpLogIn';

function Main() {
  const path = useLocation().pathname;

  return (
    <div>
      {path === '/' ? <Redirect to="/peeps" /> : null}
      <Header />
      <Route path="/sign-up-log-in" exact component={SignUpLogIn} />
      <Route path="/peeps" exact component={PeepList} />
    </div>
  );
}

export default Main;
