import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

//const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStore(reducers);
set_state()

function set_state() {
  store.dispatch ({
  type: 'SET_STATE',
  state: {
    filters: [
      {id: 'shower', inuse: false },
      {id: 'pets', inuse: false },
      {id: 'flush', inuse: false },
      {id: 'water', inuse: false }
    ],
    //markers: campgrounds,
    gmapMarkers: [],
    showingInfoWindow: "false",
    activeMarker: null,
    selectedTitle: ""
  }
 })
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
