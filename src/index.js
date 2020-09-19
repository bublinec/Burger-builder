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

const rootReducer = combineReducers({
  burger: burger,
  order: order
})

// redux DevTools setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

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