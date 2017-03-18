import React from 'react';
import { Link } from 'react-router';
import Now from './now';
import yenProfilePic from '../images/profile.jpg';

const AboutMe = () => {

  return (
    <div>
      <h1>About Me</h1>
      <img className="img-fluid profile" src={yenProfilePic} alt="Yenly Ma" />
      <p>My name is Yenly (pronounced yen-lee). Former UI Developer transitioning to fulll stack
      Software Engineer.</p>

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
