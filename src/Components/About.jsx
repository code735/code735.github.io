import React from 'react';

const About = () => {
  return (
    <div id="about" className="about section">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img className="profileimage" src="./images/image.jpg" alt="" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <h1 id="user-detail-name">Prathmesh Kumbhar</h1>
            <h2 id="user-detail-intro">
              Hey, my name is Prathmesh. I live in Pune, Maharashtra, India. I am a quick learner with a strong problem-solving ability and a can-do attitude. I am excited to apply my skills such as Java, DSA, React, Redux, Node.js, Express, MongoDB, and my passion for web development to contribute to the success of a dynamic organization.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;