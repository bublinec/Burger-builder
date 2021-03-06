// packages
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// app imports
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// reducers
import burger from './store/reducers/burger';
import order from './store/reducers/order';
import auth from './store/reducers/auth';

const rootReducer = combineReducers({
  burger: burger,
  order: order,
  auth: auth
})

// redux DevTools setup
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const centralStore = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
  ));

const app = (
  <Provider store={centralStore}>
    <Router>
      <App />
    </Router>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();