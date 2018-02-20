import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mentor: {}
    };
  }

  componentDidMount() {
    axios.get('/api/mentor/'+this.props.match.params.id)
      .then(res => {
        this.setState({ mentor: res.data });
        console.log(this.state.mentor);
      });
  }

  onChange = (e) => {
    const state = this.state.mentor
    state[e.target.name] = e.target.value;
    this.setState({mentor:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, skills, organization, linkedin } = this.state.mentor;

    axios.put('/api/mentor/'+this.props.match.params.id, { name, skills, organization, linkedin })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT MENTOR
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.mentor._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Mentor List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={this.state.mentor.name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="skills">Skills:</label>
                <input type="text" class="form-control" name="skills" value={this.state.mentor.skills} onChange={this.onChange} placeholder="Skills" />
              </div>
              <div class="form-group">
                <label for="organization">Organization:</label>
                <input type="text" class="form-control" name="organization" value={this.state.mentor.organization} onChange={this.onChange} placeholder="Organization" />
              </div>
              <div class="form-group">
                <label for="linkedin">LinkedIn:</label>
                <input type="text" class="form-control" name="linkedin" value={this.state.mentor.linkedin} onChange={this.onChange} placeholder="LinkedIn" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;