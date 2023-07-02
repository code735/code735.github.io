import React from "react";

const Skills = () => {
  return (
    <>
      <div id="skills" className="section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Skills</h2>
          </div>
          <div className="skills-content">
            <div className="row">
              <div className="col-md-6">
                <div className="skill-item">
                  <h3>Front-end Development</h3>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Redux</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="skill-item">
                  <h3>Back-end Development</h3>
                  <ul>
                    <li>Java</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="skills">
        <div className="container skills-card">
          <h1 className="sub-title">Tools</h1>
          <div className="skills-list">
            <div className="skill">
              <img className="skills-card-img" src="" alt="" />
              <h5 className="skills-card-name">Postman</h5>
            </div>

            <div className="skill">
              <img className="skills-card-img" src="" alt="" />
              <h5 className="skills-card-name">VS Code</h5>
            </div>

            <div className="skill">
              <img className="skills-card-img" src="" alt="" />
              <h5 className="skills-card-name">MongoDB Atlas</h5>
            </div>

            <div className="skill">
              <img className="skills-card-img" src="" alt="" />
              <h5 className="skills-card-name">Thunder Client</h5>
            </div>

            <div className="skill">
              <img className="skills-card-img" src="" alt="" />
              <h5 className="skills-card-name">Github</h5>
            </div>

            <div className="skill">
              <img className="skills-card-img" src="" alt="" />
              <h5 className="skills-card-name">EmailJs</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;