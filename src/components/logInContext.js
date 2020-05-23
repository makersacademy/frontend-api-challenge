import React, { useState } from 'react';

const LogInContext = React.createContext([{}, () => {}, () => {}]);

function LogInProvider({ children }) {
  const [state, setState] = useState({
    user_id: '',
    session_key: '',
    handle: '',
  });

  function login(loginState, name) {
    setState({
      user_id: loginState.user_id,
      session_key: loginState.session_key,
      handle: name,
    });
  }

  function isUserLoggedIn() {
    return state.user_id !== '';
  }

  return (
    <LogInContext.Provider value={[state, login, isUserLoggedIn]}>
      {children}
    </LogInContext.Provider>
  );
}

export { LogInContext, LogInProvider };
