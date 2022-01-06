import React from "react";
import "../Home/Home.css";
import "bootstrap/dist/css/bootstrap.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Projects = () => {
  return (
    <div className="section" id="projects">
      <div className="title">
        <h2>Projects</h2>
      </div>
      <Card className="card popout">
        <Card.Body>
          <Card.Title>
            <h4>Chemicals Near Me</h4>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <h5>React/JavaScript (ES6+), HTML/CSS, Python</h5>
          </Card.Subtitle>
          <Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroupItem className="list-item">
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
              </ListGroupItem>
              <ListGroupItem className="list-item">
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
              </ListGroupItem>
              <ListGroupItem className="list-item">
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
              </ListGroupItem>
              <ListGroupItem className="list-item">
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
              </ListGroupItem>
              <ListGroupItem className="list-item">
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
              </ListGroupItem>
              <ListGroupItem className="list-item">
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
              </ListGroupItem>
            </ListGroup>
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
      <Card className="card popout">
        <Card.Body>
          <Card.Title>
            <h4>Searchvis</h4>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <h5>Python</h5>
          </Card.Subtitle>
          <Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroupItem className="list-item">
                Implemented a{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Graphical_user_interface"
                  target="_blank"
                  rel="noreferrer"
                >
                  GUI
                </a>{" "}
                for visualizing various common pathfinding algorithms.
              </ListGroupItem>
              <ListGroupItem className="list-item">
                Provided functions for users to create obstacles for
                pathfinding.
              </ListGroupItem>
              <ListGroupItem className="list-item">
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
              </ListGroupItem>
            </ListGroup>
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
      <Card className="card popout">
        <Card.Body>
          <Card.Title>
            <h4>PintOS Projects</h4>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <h5>C/x86</h5>
          </Card.Subtitle>
          <Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroupItem className="list-item">
                Added priority scheduling with timer interrupts for ordering
                processes in the CPU.
              </ListGroupItem>
              <ListGroupItem className="list-item">
                Implemented argument passing for execution of user programs.
              </ListGroupItem>
              <ListGroupItem className="list-item">Created system calls for user programs to readily use.</ListGroupItem>
              <ListGroupItem className="list-item">
                Expanded the virtual memory system, adding a page replacement
                system and the use of swap.
              </ListGroupItem>
              <ListGroupItem className="list-item">
                Expanded the existing file system to allow access by multiple
                threads and support multi-level indexed files.
              </ListGroupItem>
            </ListGroup>
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Projects;
