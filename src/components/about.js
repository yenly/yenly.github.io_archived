import React from 'react';
import { Link } from 'react-router';

const AboutMe = () => {

  return (
    <div>
      <h1>About Me</h1>
      <p>My name is Yenly (pronounced yen-lee). Former UI Developer transitioning to fulll stack
      Software Engineer.</p>

      <ul>
        <li><Link to="/now">What am I doing now?</Link></li>
        <li><Link to="/projects" >Projects</Link></li>
        <li><a href="https://yenly.github.io/kodo_no_boken/" >Kōdo No Bōken</a></li>
      </ul>
    </div>
  );
};

export default AboutMe;
