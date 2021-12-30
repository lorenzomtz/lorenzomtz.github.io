import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.css";
// import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <div className="home">
      <Container>
        <div id="home">
          <h4>Hello, my name is</h4>
          <div className="title">
            <h1 id="name">Lorenzo Martinez.</h1>
            <h1 id="subname">I develop software.</h1>
          </div>
          <div className="title-bio">
            <p>
              I'm a student/software engineer with interests in machine
              learning, cybersecurity, and web development. This summer I will
              be working for{" "}
              <a
                href="https://www.amazon.com/"
                target="_blank"
                rel="noreferrer"
              >
                Amazon
              </a>{" "}
              in their{" "}
              <a
                href="https://aws.amazon.com/"
                target="_blank"
                rel="noreferrer"
              >
                AWS
              </a>{" "}
              department as a SDE intern.
            </p>
          </div>
        </div>
        <div id="about">
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
                  when a professor transformed a random elective into something
                  that has enraptured my brain since. From creating a barely
                  functioning Brick Breaker replica to training an AI to do well
                  at a{" "}
                  <a
                    href="https://pypi.org/project/PySuperTuxKart/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Mario Kart equivalent
                  </a>
                  , my journey through the ever-expanding world of computer
                  science has come a long way.
                </p>
              </div>
              <div className="info">
                <p>
                  Throughout my college career, the idea of securing a highly
                  sought after internship faded into a void of impossibility
                  despite continuously delving into side projects and{" "}
                  <a
                    href="https://leetcode.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LeetCode
                  </a>
                  . Today, I I have just recently completed a previous SWE
                  internship at{" "}
                  <a
                    href="https://www.paymaya.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    PayMaya
                  </a>{" "}
                  and moving forward to a future SDE internship at{" "}
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
                  . I love spending time with nature and my friends/family as
                  much as possible.
                </p>
              </div>
            </div>
            <div id="about-img">
              <img src="headshot.jpg" alt="Headshot of me" width="400px" />
            </div>
          </div>
        </div>
        <div id="experience">
          <div className="title">
            <h2>Experience</h2>
          </div>
          <div className="info">
            <h4>
              Software Engineer Intern @{" "}
              <a
                href="https://www.paymaya.com/"
                target="_blank"
                rel="noreferrer"
              >
                PayMaya Philippines
              </a>
            </h4>
            <h5>07/2021 - 09/2021 || Remote</h5>
            <ul>
              <li>
                Replicated{" "}
                <a
                  href="https://en.wikipedia.org/wiki/SQL"
                  target="_blank"
                  rel="noreferrer"
                >
                  SQL
                </a>{" "}
                database in{" "}
                <a
                  href="https://www.microsoft.com/en-us/sql-server/sql-server-2019"
                  target="_blank"
                  rel="noreferrer"
                >
                  MSSQL
                </a>{" "}
                to test modification actions.
              </li>
              <li>
                Tested importing 1000+ rows of synthetic data from CSV files
                into multiple tables in SQL database.
              </li>
              <li>
                Created randomized synthetic user data for project testing in{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Comma-separated_values"
                  target="_blank"
                  rel="noreferrer"
                >
                  CSV
                </a>{" "}
                format using{" "}
                <a
                  href="https://www.python.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Python
                </a>
                .
              </li>
              <li>
                Met with mentor on weekly basis to provide detailed project
                reports and milestone updates.
              </li>
            </ul>
          </div>
        </div>

        {/* <Link to="/">Home</Link> */}

        {/* <Carousel>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100 carousel-img"
              src="reflection.JPG"
              alt="First slide"
              mode="fill"
            />
            <Carousel.Caption className="caption">
              <h1>Hello, I'm Lorenzo.</h1>
              <p>I enjoy doing a few different things in life.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100 carousel-img"
              src="water.JPG"
              alt="Second slide"
              mode="fill"
            />
            <Carousel.Caption className="caption">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100 carousel-img"
              src="clouds.JPG"
              alt="Third slide"
              mode="fill"
            />
            <Carousel.Caption className="caption">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
      </Container>
    </div>
  );
}

export default Home;
