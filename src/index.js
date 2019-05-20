import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import * as serviceWorker from './serviceWorker';

const logger = createLogger({collapsed: true});
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister();
