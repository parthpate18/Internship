import React from "react";
import "./aboutus.css";
// import vdo from '../VIDEO/tractor-driving.mp4'

const About = () => {
  return (
    <>
      <div className="about-main-container">
        <div className="about-main  m-3 p-5">
          <div className="about-heading p-2">
            <h2>Video Tutorial to understand workflow of website</h2>
          </div>

          <div className="about-container p-3 m-3">
            <div className="video-tutorial p-2">
              <video src="" controls></video>
            </div>
          </div>

          <div className="developer-div p-3">
            <h2 className="mb-5 ps-3" style={{
              textAlign: "center"
            }}>DEVELOPER</h2>

            <div className="dev-name p-3">
              <div id="dev-box">
                <h4 id="stuId">22IT105</h4>
                <h4 id="stuName">PARTH PATEL</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
