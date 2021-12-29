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
