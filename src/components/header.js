import React from 'react';
import SignUpLogIn from './signUpLogIn';

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
      <SignUpLogIn />
    </div>
  );
}

export default Header;
