import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LogInContext } from './logInContext';

function Header() {
  const [state, , isLoggedIn] = useContext(LogInContext);

  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: 'lightyellow',
    padding: '10px',
    fontSize: '30px',
    borderBottom: '1px solid black',
  };

  return (
    <div style={styles}>
      <div>Chitter</div>
      <div style={{ fontSize: '16px' }}>
        <Link to="/sign-up-log-in">Sign up/Log in</Link>
      </div>
      {isLoggedIn() && <h2>Welcome {state.handle}</h2>}
    </div>
  );
}

export default Header;
