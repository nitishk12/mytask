import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

const ele = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(ele, document.getElementById('root'));

