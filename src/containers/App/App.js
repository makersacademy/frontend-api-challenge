import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Classes from './App.module.css';
import Auth from '../Auth/Auth';

function App() {
  return (
    <div className={Classes.App} data-test='component-app'>
      <Switch>
        <Route path='/auth' component={Auth} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
