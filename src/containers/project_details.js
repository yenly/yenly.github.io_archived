import React from 'react';


const ProjectDetails = ({project}) => {
  return (
    <div className="row align-items-start" key={project.name}>
      <div className="col-sm-6">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <p><strong>Tech stack: </strong>{project.tech_stack}</p>
        <a href={project.github_link} className="btn btn-outline-info" target="_blank"><i className="fa fa-github fa-lg" aria-hidden="true"></i> Github Repo</a>
        { project.demo_link ? <a href={project.demo_link} className="btn btn-outline-info" target="_blank">Demo</a> : '' }
      </div>
      <div className="col-sm-6 text-right">
        { project.img_url ? <img className="img-fluid app_screen" src={project.img_url} alt={project.name} /> : <i className="fa fa-file-code-o fa-5x" aria-hidden="true"></i> }
      </div>
    </div>

  );
};

export default ProjectDetails;
