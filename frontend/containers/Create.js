import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
    console.log("reaches Create");
  }

  componentWillMount() {
    this.onSubmit.bind(this);
  }
  onChange(e) {
    console.log(e.target.name + ":" + e.target.value)
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit(e) {
    e.preventDefault();

    const { name, skills, organization, linkedin } = this.state;

    axios.post('/api/mentor', { name, skills, organization, linkedin })
      .then((result) => {
        console.log(result);
        this.props.history.push("/")
      });
  }

  render() {
    const { name, skills, organization, linkedin } = this.state;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              ADD MENTOR
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Mentor List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <textArea className="form-control" name="name" onChange={this.onChange.bind(this)} placeholder="Name" cols="50" rows="1">{name}</textArea>
              </div>
              <div className="form-group">
                <label htmlFor="skills">Skills:</label>
                <textArea className="form-control" name="skills" onChange={this.onChange.bind(this)} placeholder="Skills" cols="50" rows="1">{skills}</textArea>
              </div>
              <div className="form-group">
                <label htmlFor="company">Organization:</label>
                <textArea className="form-control" name="organization" onChange={this.onChange.bind(this)} placeholder="Organization" cols="50" rows="1">{organization}</textArea>              </div>
              <div className="form-group">
                <label htmlFor="linkedin">LinkedIn:</label>
                <textArea className="form-control" name="linkedin" onChange={this.onChange.bind(this)} placeholder="LinkedIn" cols="50" rows="1">{linkedin}</textArea>
              </div>
              <button type="submit" onClick={this.onSubmit.bind(this)} className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;