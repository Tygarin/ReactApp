import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss'
import App from './js/App';
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from './js/redux/reducers'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
