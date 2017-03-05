import React from 'react';

const ProjectDetails = ({project}) => {

  return (
    <div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p>{project.tech_stack}</p>
      <a href={project.github_link} className="btn btn-outline-info" target="_blank">Github Repo</a>
      {/* <a href={project.demo_link} className="btn btn-outline-info" target="_blank">Demo</a> */}
    </div>
  );
};

export default ProjectDetails;
