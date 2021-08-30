import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './route';
import { createBrowserHistory } from "history";
import store from './store/index';
import { Provider } from 'react-redux';

const history = createBrowserHistory();
// import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter history={history}>
    <Router />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
