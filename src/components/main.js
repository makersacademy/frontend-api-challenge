import React, { useState } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';

import Header from './header';
import PeepList from './peepList';
import SignUpLogIn from './signUpLogIn';
import LoginContext from './loginContext';

function Main() {
  const path = useLocation().pathname;
  const initialLoginState = { user_id: '', session_key: '', handle: '' };
  const [loginState, setLoginState] = useState(initialLoginState);

  function login(userId, sessionKey, handle) {
    setLoginState({ user_id: userId, session_key: sessionKey, handle });
  }

  function isLoggedIn() {
    return loginState.session_key !== '';
  }

  return (
    <LoginContext.Provider value={[loginState, login, isLoggedIn]}>
      <div>
        {path === '/' ? <Redirect to="/peeps" /> : null}
        <Header />
        <Route path="/sign-up-log-in" exact component={SignUpLogIn} />
        <Route path="/peeps" exact component={PeepList} />
      </div>
    </LoginContext.Provider>
  );
}

export default Main;
