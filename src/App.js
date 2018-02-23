 import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import Routes from "./containers/Routes";
import RouteNavItem from "./components/RouteNavItem";
import "./App.css";

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
            mentors: []
          };
  }

  // componentDidMount() {
  //     fetch('https://she17er.herokuapp.com/api/users/getUsers').then(results => {return results.json();}).then(data => {this.setState({login: data.login});});
  //   }



  render() {
      return (
        <div classname="container">
          <div classname="panel panel-default">
            <div classname="panel-heading">
              <h3 classname="panel-title">
                MENTOR DATABASE
              </h3>
            </div>
            <div class="panel-body">
              <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Mentor</Link></h4>
              <table class="table table-stripe">
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
      );
    }
}

export default App;
