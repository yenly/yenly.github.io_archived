import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
