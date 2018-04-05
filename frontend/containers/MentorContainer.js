import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { Switch, Router, Route } from 'react-router-dom';
import Routes from "./Routes";
import Edit from './Edit';
import Create from './Create';
import Show from './Show';


class MentorContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
            mentors: []
          };
      console.log("reaches Mentor Container");
  }

  
  render() {
      return (
        <div>
        <Switch>
            <div>
              <Route path='/edit/:id' component={Edit} />
              <Route path='/create' component={Create} />
              <Route path='/show/:id' component={Show} />
            </div>
        </Switch>
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                MENTOR DATABASE
              </h3>
            </div>
            <div className="panel-body">
              <h4><Link to="/create"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Mentor</Link></h4>
              <table className="table table-stripe">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Skills</th>
                    <th>Organization</th>
                    <th>Linkedin</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.mentors.map(mentor =>
                    <tr>
                      <td><Link to={`/show/${mentor._id}`}>{mentor.name}</Link></td>
                      <td>{mentor.skills}</td>
                      <td>{mentor.organization}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </div>
      );
  }
}

export default MentorContainer;