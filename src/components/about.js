import React from 'react';
// import { Link } from 'react-router';
import Now from './now';
import yenProfilePic from '../images/profile.jpg';
import { Card, CardHeader, CardText  } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import bkgdGokyoTso from '../images/gokyotso.jpg';

const profileCardStyle = {
  textAlign: 'left',
}

const cardHeaderTitleStyle  = {
  fontSize: "2em",
}

const cardHeaderSubTitleStyle = {
  fontSize: "1.2em",
}



const AboutMe = () => {
  // document.body.style.backgroundImage = `url(${bkgdGokyoTso})`;

  return (
    <div className="aboutContainer">
      {/* <Paper style={paperProfileStyle} zDepth={3}>
        <img src={yenProfilePic} style={avatarStyle} />
        <p>My name is Yenly (pronounced yen-lee). Former UI Developer transitioning to fulll stack Software Engineer.</p>

        <Now />
      </Paper> */}
      {/* <div className="profileOverlay"></div>
      <div className="profile">
        <div>
          <img src={yenProfilePic} style={avatarStyle} />
          <p>My name is Yenly (pronounced yen-lee). Former UI Developer transitioning to fulll stack Software Engineer.</p>
        </div>
        <Now />

      </div> */}
      <Card style={profileCardStyle} zDepth={3}>
        <CardHeader
          title="About Yenly" titleStyle={cardHeaderTitleStyle}
          subtitle="Full Stack Software Engineer, former UI Developer"
          subtitleStyle={cardHeaderSubTitleStyle}
          avatar={<Avatar src={yenProfilePic} size={80} />} >
        </CardHeader>
        <CardText>
          <p>Yenly is pronounced yen-lee. Currently living in San Francisco. Believer of growth mindset and the craftmen mindset paradigm. Ceramic Artist. Travel photography hobbist. Avid hiker. Yogi.</p>
          <Now />
        </CardText>
      </Card>

    </div>
  );
};

export default AboutMe;
