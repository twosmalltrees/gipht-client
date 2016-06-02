import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';

import $ from 'jquery';
import 'j-toker';

// Configure auth with j-toker
$.auth.configure({
  apiUrl: 'http://localhost:3000'
});

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.querySelector('.container')
);
