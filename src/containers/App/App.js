import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Classes from './App.module.css';
import Auth from '../Auth/Auth';
import MainFeed from '../MainFeed/MainFeed';

function App() {
	return (
		<div className={Classes.App} data-test='component-app'>
			<Switch>
				<Route path='/' exact component={MainFeed} />
				<Route path='/auth' component={Auth} />
				<Route path='/main' component={MainFeed} />
				<Redirect to='/' />
			</Switch>
		</div>
	);
}

export default App;
