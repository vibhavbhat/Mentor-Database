import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import { configureStore, history } from './store/configureStore';
import './index.css';
import Root from './containers/Root'

const store = configureStore(history);
render(<Root store={store} history={history} />,
  document.getElementById('root')
);