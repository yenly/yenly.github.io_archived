import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

const cardMediaStyle = {
  borderTop: '1px solid #eee',
  borderBottom: '1px solid #eee',
}

const ProjectDetails = ({project}) => {
  return (
    <div className="cardContainer">
      <Card zDepth={2}>
        <CardHeader title={project.name} />
        <CardMedia style={cardMediaStyle}>
          <img src={project.img_url} />
        </CardMedia>
        <CardText>
          <p>{project.description}</p>
          <p><strong>Tech stack: </strong>{project.tech_stack}</p>
        </CardText>
        <CardActions>
          <FlatButton
            href={project.github_link}
            label="Github Link"
            target="_blank"
            icon={<FontIcon className="fa fa-github fa-lg" />} />
          { project.demo_link ? <FlatButton href={project.demo_link} label="Demo" target="_blank" /> : '' }
        </CardActions>
      </Card>
    </div>


  );
};

export default ProjectDetails;
