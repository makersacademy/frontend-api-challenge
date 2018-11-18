import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import AppRouter from './routers/AppRouter'
import { startSetPeeps } from './actions/peeps'

const store = configureStore()

const state = store.getState();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>

)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));


store.dispatch(startSetPeeps())
ReactDOM.render(jsx, document.getElementById('app'));
