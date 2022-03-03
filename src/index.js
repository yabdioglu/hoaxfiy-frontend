import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap-override.scss'
import reportWebVitals from './reportWebVitals';
import './i18n';
import App from './container/App';
// import AuthenticationContext from './shared/AuthenticationContext';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const loggedInState = {
  isLoggedIn: true,
  username: 'user1',
  displayName: 'display1',
  image: null,
  password: 'P4ssword'
}
const defaultState = {
  isLoggedIn: false,
  username: undefined,
  displayName: undefined,
  image: undefined,
  password: undefined
}

const reducer = (state, action) => {
  if (action.type === 'logout-success') {
    return defaultState;
  }
  return state;
}

const store = createStore(reducer, loggedInState); // İkinci parametre başlangıç state'imiz

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
