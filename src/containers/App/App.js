import React from 'react';
import Classes from './App.module.css';
import UserOption from '../UserOption/UserOption';

function App() {
  return (
    <div className={Classes.App} data-test='component-app'>
      <h1 className='title'>Chitter</h1>
      <UserOption data-test='component-user-option' option='Sign In' />
      <UserOption data-test='component-user-option' option='Sign Up' />
    </div>
  );
}

export default App;
