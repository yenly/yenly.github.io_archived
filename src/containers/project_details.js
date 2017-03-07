import React from 'react';

const ProjectDetails = ({project}) => {

  return (
    <div className="row align-items-start" key={project.name}>
      <div className="col-sm-6">
        App Image here.
      </div>
      <div className="col-sm-6">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <p><strong>Tech stack: </strong>{project.tech_stack}</p>
        <a href={project.github_link} className="btn btn-outline-info" target="_blank">Github Repo</a>
        {/* <a href={project.demo_link} className="btn btn-outline-info" target="_blank">Demo</a> */}
      </div>
    </div>

  );
};

export default ProjectDetails;
