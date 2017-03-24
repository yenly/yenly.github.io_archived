import React from 'react';
import Now from './now';
import yenProfilePic from '../images/profile.jpg';
import { Card, CardHeader, CardText  } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

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

  return (
    <div className="aboutContainer">
      <Card style={profileCardStyle} zDepth={3}>
        <CardHeader
          title="About Yenly" titleStyle={cardHeaderTitleStyle}
          subtitle="Full Stack Software Engineer, former UI Developer"
          subtitleStyle={cardHeaderSubTitleStyle}
          avatar={<Avatar src={yenProfilePic} size={80} />} >
        </CardHeader>
        <CardText>
          <p>Yenly is pronounced yen-lee. Currently living in San Francisco. Believes in having a <a href="https://sivers.org/mindset" target="_blank">growth mindset</a> and a <a href="https://sivers.org/book/SoGood" target="_blank">craftsman mindset</a>. Lifelong learner. Ceramic artist. Travel photography hobbyist. Avid hiker. Love of nature turned me into a backpacker.</p>
          <Now />
        </CardText>
      </Card>

    </div>
  );
};

export default AboutMe;
