import React, { Component } from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './src/reducers';

import Routes from './src/Routes';


export default class App extends Component {
  render() {
    return (
      <Provider store={ createStore(Reducers) }>
        <Routes />
      </Provider>
    );
  }
}
