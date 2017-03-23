import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectDetails from './project_details';
import bkgdLandsEnd from '../images/landsend.jpg';


class Projects extends Component {
  constructor() {
    super();
    document.body.style.backgroundImage = `url(${bkgdLandsEnd})`;
  }

  renderList() {

    return this.props.projects.map((project) => {
      return (
        <div key={project.name}>
          <ProjectDetails project={project} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="cardContainer">
          <h1>Projects</h1>
          {this.renderList()}
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
