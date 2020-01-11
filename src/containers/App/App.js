import React from 'react';
import Classes from './App.module.css';
import Auth from '../Auth/Auth';

function App() {
  return (
    <div className={Classes.App} data-test='component-app'>
      <Auth />
    </div>
  );
}

export default App;
