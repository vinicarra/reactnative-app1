import React, { Component } from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './src/reducers';
import thunk from 'redux-thunk';

import Routes from './src/Routes';


export default class App extends Component {
  render() {
    return (
      <Provider store={ createStore(Reducers, {}, applyMiddleware(thunk)) }>
        <Routes />
      </Provider>
    );
  }
}
