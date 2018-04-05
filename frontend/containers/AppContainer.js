import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Switch, Router, Route, Link } from 'react-router-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
//import './index.css';
import MentorContainer from './MentorContainer';
import Edit from './Edit';
import Create from './Create';
import Show from './Show';
//import registerServiceWorker from './registerServiceWorker';

console.log("reached before AppContainer ");
class AppContainer extends Component {
    render() {
        return (
          <div>
              {/* <Router> */}
            <Switch>
                {/* <div> */}
                    <Route exact path='/' component={MentorContainer} />
                    <Route path='/edit/:id' component={Edit} />
                    <Route path='/create' component={Create} />
                    <Route path='/show/:id' component={Show} />
                {/* </div> */}
            </Switch>
            {/* </Router> */}
          </div>
        );
      }
}

export default AppContainer;


    