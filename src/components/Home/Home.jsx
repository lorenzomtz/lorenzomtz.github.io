import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";

const Home = () => {
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
              I'm a student/software engineer with interests in{" "}
              <a
                href="https://en.wikipedia.org/wiki/Machine_learning"
                target="_blank"
                rel="noreferrer"
              >
                machine learning
              </a>
              ,{" "}
              <a
                href="https://en.wikipedia.org/wiki/Computer_security"
                target="_blank"
                rel="noreferrer"
              >
                cybersecurity
              </a>
              , and{" "}
              <a
                href="https://en.wikipedia.org/wiki/Web_development"
                target="_blank"
                rel="noreferrer"
              >
                web development
              </a>
              . This summer I will be working for{" "}
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
              department as a Software Development Engineer intern.
            </p>
          </div>
        </div>
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
                  . Today, I I have just recently completed a previous software
                  engineering internship at{" "}
                  <a
                    href="https://www.paymaya.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    PayMaya
                  </a>{" "}
                  and moving forward to a future software development
                  engineering internship at{" "}
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
        <div className="section" id="experience">
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
        <div className="section" id="projects">
          <div className="title">
            <h2>Projects</h2>
          </div>
          <div className="info">
            <h4>Chemicals Near Me</h4>
            <h5>React/JavaScript (ES6+), HTML/CSS, Python</h5>
            <ul>
              <li>
                Hosted a dynamic website through{" "}
                <a
                  href="https://aws.amazon.com/amplify/"
                  target="_blank"
                  rel="noreferrer"
                >
                  AWS Amplify
                </a>{" "}
                after obtaining a domain name through{" "}
                <a
                  href="https://www.namecheap.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  NameCheap
                </a>
                .
              </li>
              <li>
                Scraped data from multiple different APIs and formatted into
                suitable{" "}
                <a
                  href="https://www.json.org/json-en.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  JSON
                </a>{" "}
                files using{" "}
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
                Exported data into a database hosted on{" "}
                <a
                  href="https://aws.amazon.com/rds/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Amazon RDS
                </a>{" "}
                via{" "}
                <a
                  href="https://www.postgresql.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  PostgreSQL
                </a>{" "}
                utilizing{" "}
                <a
                  href="https://flask-sqlalchemy.palletsprojects.com/en/2.x/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Flask SQLAlchemy
                </a>
                .
              </li>
              <li>
                Created a{" "}
                <a
                  href="https://flask.palletsprojects.com/en/2.0.x/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Flask
                </a>{" "}
                backend that provided pagination, filtering, sorting, and
                searching over various models.
              </li>
              <li>
                Implemented a{" "}
                <a
                  href="https://restfulapi.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  RESTful API
                </a>{" "}
                using{" "}
                <a
                  href="https://www.postman.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Postman
                </a>{" "}
                and deployed to AWS via{" "}
                <a
                  href="https://aws.amazon.com/elasticbeanstalk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  AWS Elastic Beanstalk
                </a>
                .
              </li>
              <li>
                Provided visualizations of data through{" "}
                <a
                  href="https://reactjs.org/docs/hooks-intro.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  React Hooks
                </a>{" "}
                and{" "}
                <a
                  href="https://recharts.org/en-US/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Recharts
                </a>
                .
              </li>
            </ul>
          </div>
          <div className="info">
            <h4>Searchvis</h4>
            <h5>Python</h5>
            <ul>
              <li>
                Implemented a{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Graphical_user_interface"
                  target="_blank"
                  rel="noreferrer"
                >
                  GUI
                </a>{" "}
                for visualizing various common pathfinding algorithms.
              </li>
              <li>
                Provided functions for users to create obstacles for
                pathfinding.
              </li>
              <li>
                Researched common search algorithms (
                <a
                  href="https://en.wikipedia.org/wiki/Breadth-first_search"
                  target="_blank"
                  rel="noreferrer"
                >
                  BFS
                </a>
                ,{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Depth-first_search"
                  target="_blank"
                  rel="noreferrer"
                >
                  DFS
                </a>
                ,{" "}
                <a
                  href="https://www.geeksforgeeks.org/uniform-cost-search-dijkstra-for-large-graphs/"
                  target="_blank"
                  rel="noreferrer"
                >
                  UCS
                </a>
                , and{" "}
                <a
                  href="https://en.wikipedia.org/wiki/A*_search_algorithm"
                  target="_blank"
                  rel="noreferrer"
                >
                  A*
                </a>
                ) and how to implement them for different uses.
              </li>
            </ul>
          </div>
          <div className="info">
            <h4>PintOS Projects</h4>
            <h5>C/x86</h5>
            <ul>
              <li>
                Added priority scheduling with timer interrupts for ordering
                processes in the CPU.
              </li>
              <li>
                Implemented argument passing for execution of user programs.
              </li>
              <li>Created system calls for user programs to readily use.</li>
              <li>
                Expanded the virtual memory system, adding a page replacement
                system and the use of swap.
              </li>
              <li>
                Expanded the existing file system to allow access by multiple
                threads and support multi-level indexed files.
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
};

export default Home;
