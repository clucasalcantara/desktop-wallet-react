import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from "react-router-config";
// Routes
import { routes } from './router';
// Styles
import './styles/index.css';

// No PWA stuff for now
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    { renderRoutes(routes) }
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
