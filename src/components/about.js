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
    <div>
      <Paper style={paperProfileStyle} zDepth={3}>
        <h1>Yenly Ma</h1>
        <Avatar src={yenProfilePic} style={avatarStyle} size={180} />
        <p>My name is Yenly (pronounced yen-lee). Former UI Developer transitioning to fulll stack Software Engineer.</p>
      </Paper>

      <Now />

      <ul>
        {/* <li><Link to="/now">What am I doing now?</Link></li> */}
        <li><Link to="/projects" >Projects</Link></li>
        <li><Link to="/my_art" >My Art</Link></li>
        {/* <li><a href="https://yenly.github.io/kodo_no_boken/" >Kōdo No Bōken</a></li> */}
      </ul>
    </div>
  );
};

export default AboutMe;
