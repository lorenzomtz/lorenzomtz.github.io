import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Form, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Contact.css";
import "../Home/Home.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      // TODO - send mail
      const serviceId = "service_b1dcvbt";
      const templateId = "template_8ufi1za";
      const userId = "user_tqEEk8p80Er6pUfoHcwie";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName(name);
      setEmail(email);
      setMessage(message);
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  // const isValidEmail = (email) => {
  //   const regex =
  //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return regex.test(String(email).toLowerCase());
  // };

  return (
    <div className="section">
      <div className="title">
        <h2 id="contact-header">Contact Me</h2>
      </div>
      <Container>
        <Form id="contact-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="label">Name</Form.Label>
            <Form.Control
              className="area"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Label className="label">Email address</Form.Label>
            <Form.Control
              className="area"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Label className="label">Message</Form.Label>
            <Form.Control
              className="area"
              as="textarea"
              rows={3}
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>
          <Button
            className="button"
            variant="primary"
            type="submit"
            onClick={submit}
          >
            Submit
          </Button>
        </Form>
        <span className={emailSent ? "visible" : "invisible"}>
          Thank you for your message, we will be in touch in no time!
        </span>
      </Container>
    </div>
  );
};

export default Contact;
