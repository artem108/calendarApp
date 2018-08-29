import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './containers/Main';
import { Provider } from 'react-redux'
import configureStore from './configStore'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,

document.getElementById('root'));
