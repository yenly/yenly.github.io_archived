import React from 'react';
import { Card, CardMedia, CardText, CardActions, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

const cardMediaStyle = {
  borderTop: '1px solid #eee',
  borderBottom: '1px solid #eee',
}

const cardStyle = {
  textAlign: 'left',
  marginBottom: '28px',
}

const buttonStyle = {
  borderRadius: '20px',
}

const ProjectDetails = ({project}) => {
  return (
    <div>
      <Card style={cardStyle} zDepth={2}>
        <CardMedia style={cardMediaStyle}>
          <img src={project.img_url} alt={project.name} />
        </CardMedia>
        <CardTitle title={project.name} />
        <CardText>
          <p>{project.description}</p>
          <p><strong>Tech stack: </strong>{project.tech_stack}</p>
        </CardText>
        <CardActions>
          <FlatButton
            href={project.github_link}
            label="Github Link"
            target="_blank"
            style={buttonStyle}
            icon={<FontIcon className="fa fa-github fa-lg" />} />
          { project.demo_link ? <FlatButton style={buttonStyle} href={project.demo_link} label="Demo" target="_blank" /> : '' }
        </CardActions>
      </Card>
    </div>
  );
};

export default ProjectDetails;
