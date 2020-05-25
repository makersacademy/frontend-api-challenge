import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Main from './components/main';
import LoginContext from './components/loginContext';

function App() {
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
      <Router>
        <Main />
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
