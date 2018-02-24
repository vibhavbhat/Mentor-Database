import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
//import './index.css';
import MentorContainer from './MentorContainer';
//import registerServiceWorker from './registerServiceWorker';

    render() {
       return(
          <Router>
              <div>
                <Route exact path='/' component={MentorContainer} />
              </div>
          </Router>
       );
    }