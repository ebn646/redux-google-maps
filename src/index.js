import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import App from './containers/app';
import reducers from './reducers';


const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers,enhancers)}>
    <App />
  </Provider>
  , document.querySelector('.app'));
