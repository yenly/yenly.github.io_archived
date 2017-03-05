import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectDetails from './project_details';

class Projects extends Component {
  renderList() {
    return this.props.projects.map((project) => {
      return (
        <li key={project.name}>
          <ProjectDetails project={project} />
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

export default connect(mapStateToProps) (Projects);
