import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      skills: '',
      organization: '',
      linkedin: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, skills, organization, linkedin } = this.state;

    axios.post('/api/mentor', { name, skills, organization, linkedin })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { name, skills, organization, linkedin } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD MENTOR
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Mentor List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Name:</label>
                <textArea class="form-control" name="name" onChange={this.onChange} placeholder="Name" cols="50" rows="1">{name}</textArea>
              </div>
              <div class="form-group">
                <label for="skills">Skills:</label>
                <textArea class="form-control" name="skills" onChange={this.onChange} placeholder="Skills" cols="50" rows="1">{skills}</textArea>
              </div>
              <div class="form-group">
                <label for="company">Organization:</label>
                <textArea class="form-control" name="organization" onChange={this.onChange} placeholder="Organization" cols="50" rows="1">{organization}</textArea>              </div>
              <div class="form-group">
                <label for="linkedin">LinkedIn:</label>
                <textArea class="form-control" name="linkedin" onChange={this.onChange} placeholder="LinkedIn" cols="50" rows="1">{linkedin}</textArea>
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;