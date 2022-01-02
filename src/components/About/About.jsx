import React from "react";
import "../Home/Home.css";
import "bootstrap/dist/css/bootstrap.css";
import { Image } from "react-bootstrap";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div id="container">
        <div id="about-info">
          <div className="info">
            <p>
              Hey there! My name is Lorenzo. I am a third-year student at{" "}
              <a
                href="https://www.utexas.edu/"
                target="_blank"
                rel="noreferrer"
              >
                The University of Texas at Austin
              </a>{" "}
              studying computer science. Programming entered my life in 2016
              when a professor transformed a random elective into something that
              has enraptured my brain since. From creating a barely functioning
              Brick Breaker replica to training an AI to do well at a{" "}
              <a
                href="https://pypi.org/project/PySuperTuxKart/"
                target="_blank"
                rel="noreferrer"
              >
                Mario Kart equivalent
              </a>
              , my journey through the ever-expanding world of computer science
              has come a long way.
            </p>
          </div>
          <div className="info">
            <p>
              Throughout my college career, the idea of securing a highly sought
              after internship faded into a void of impossibility despite
              continuously delving into side projects and{" "}
              <a href="https://leetcode.com/" target="_blank" rel="noreferrer">
                LeetCode
              </a>
              . Today, I I have just recently completed a previous software
              engineering internship at{" "}
              <a
                href="https://www.paymaya.com/"
                target="_blank"
                rel="noreferrer"
              >
                PayMaya
              </a>{" "}
              and moving forward to a future software development engineering
              internship at{" "}
              <a
                href="https://www.amazon.com/"
                target="_blank"
                rel="noreferrer"
              >
                Amazon
              </a>
              .
            </p>
          </div>
          <div className="info">
            <p>
              Outside of the realm of coding, I am interested in digital
              photography, weightlifting/athletics, and gaming. My game of
              choice at the moment is{" "}
              <a
                href="https://worldofwarcraft.com/en-us/"
                target="_blank"
                rel="noreferrer"
              >
                World of Warcraft
              </a>
              . I love spending time with nature and my friends/family as much
              as possible.
            </p>
          </div>
        </div>
        <div>
          <Image fluid className="box" id="about-img" src="headshot.jpg" />
          {/* <img src="headshot.jpg" alt="Headshot of me" width="400px" /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
