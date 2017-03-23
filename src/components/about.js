import React from 'react';
import { Link } from 'react-router';
import Now from './now';
import yenProfilePic from '../images/profile.jpg';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

const paperProfileStyle = {
  textAlign: 'center',
  borderRadius: 10,
  display: 'flex',
  flexDirection: 'column',
  width: 400,
  padding: 20,
};

const avatarStyle = {
  display: 'flex',

}

const AboutMe = () => {

  return (
    <div className="aboutContainer">
      <Paper style={paperProfileStyle} zDepth={3}>
        <Avatar src={yenProfilePic} style={avatarStyle} size={180} />
        <p>My name is Yenly (pronounced yen-lee). Former UI Developer transitioning to fulll stack Software Engineer.</p>
      </Paper>

      <Paper style={paperProfileStyle} zDepth={3}>
        <Now />
      </Paper>

    </div>
  );
};

export default AboutMe;
