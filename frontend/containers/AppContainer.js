import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
//import './index.css';
import MentorContainer from './MentorContainer';
//import registerServiceWorker from './registerServiceWorker';

console.log("reached before AppContainer ");
class AppContainer extends Component {
    render() {
        return (
          <div>
            <Router>
                <div>
                    <Route exact path='/' component={MentorContainer} />
                </div>
            </Router>
          </div>
        );
      }
}

export default AppContainer;


    