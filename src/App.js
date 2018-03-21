import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from './Provider'
import App from './containers/Redux-Examples/reduxExamples.index'

const store = configureStore()

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default ReduxApp;
