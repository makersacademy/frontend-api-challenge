import { createStore, combineReducers, applyMiddleware } from 'redux'
import peepsReducer from '../reducers/peeps'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      peeps: peepsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  )
  return store
}
