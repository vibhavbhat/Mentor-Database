import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import { configureStore, history } from './store/configureStore';
import './index.css';
import Root from './containers/Root'
import AppContainer from './containers/AppContainer'
const store = configureStore(history);
// ReactDOM.render(<Root store={store} history={history} />,
//   document.getElementById('root')
// );

ReactDOM.render(
  console.log("inside render method " + AppContainer),
  <AppContainer/>
);