import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory as createHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import * as reducers from './reducers';

const history = createHistory();
const middleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({ ...reducers });

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, middleware))
);
