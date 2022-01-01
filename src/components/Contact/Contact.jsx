import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Form, Button, Container } from "react-bootstrap";

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
    <div>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={submit}>
            Submit
          </Button>
        </Form>
        <span className={emailSent ? "visible" : null}>
          Thank you for your message, we will be in touch in no time!
        </span>
      </Container>
      {/* <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button onClick={submit}>Send Message</button> */}
    </div>
  );
};

export default Contact;
