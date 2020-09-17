// packages
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// app imports
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// reducers
import burgerReducer from './store/reducers/burgerReducer';


const rootReducer = combineReducers({
  burger: burgerReducer,
})
const centralStore = createStore(rootReducer);

const app = (
  <Provider store={centralStore}>
    <Router>
      <App />
    </Router>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();