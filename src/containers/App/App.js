import React from 'react';
import Classes from './App.module.css';

function App() {
  return (
    <div className={Classes.App} data-test='component-app'>
      <h1 className='title'>Chitter</h1>
      <div>Sign Up</div>
      <div>Sign In</div>
    </div>
  );
}

export default App;
