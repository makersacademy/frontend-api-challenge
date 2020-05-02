import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
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
      <div style={{ fontSize: '16px' }}><Link to="/sign-up-log-in">Sign up/Log in</Link></div>
    </div>
  );
}

export default Header;
