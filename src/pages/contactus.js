import * as React from "react"
import { useState } from 'react';
import Layout from "../components/layout"
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";

const ContactusPage = ({ data }) => {
  const [showMessage, setShowMessage] = useState(false);

  const [values, setValues] = useState({
    firstname: "",
    user_email: "",
    lastname: "",
  });

  const [formerrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    //this console.log message should be removed once you've tested the event works 
    console.log(
      "handleChange -> " + event.target.name + " : " + event.target.value
    );
    //this is the important bit
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const validate = () => {
    console.log("Validate the form....");

    let errors = {};

    //name field
    if (!values.firstname) {
      errors.firstname = "First name is required";
    }

    if (!values.lastname) {
      errors.lastname = "Last name is required";
    }



    //email field
    if (!values.user_email) {
      errors.user_email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.user_email)) {
      errors.user_email = "Email address is invalid";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      return true;
    } else {
      return false;
    }
  };
  const onChange = (value) => {
    console.log("Captcha value:", value);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (validate(values)) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }

    emailjs.sendForm('service_2yf5pvr', 'template_u2bz6lf', form.current, 'user_ZgnIladycCsitIjLLw8UO')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };


  return (

    <Layout pageTitle="">

      <>

        <Container fluid="md">

          <Row>
            <Col>
              <Alert show={showMessage} variant="success">
                <Alert.Heading>Success</Alert.Heading>
                <p>
                  Thanks for the message! We Will Get Back to you Shortly.
                </p>
                <Button
                  onClick={() => setShowMessage(false)}
                  variant="outline-success"
                >
                  Close this alert
                </Button>

              </Alert>
            </Col>
          </Row>

          <Form ref={form} onSubmit={sendEmail} style={{ backgroundColor: "#C1F1DC" }}>
            <fieldset className="scheduler">
              <legend className="borderlegend">Contact US</legend>
              <Row>

                <Col>

                  <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="Enter First name" type="text" name="firstname" value={values.firstname} onChange={handleChange} />
                    {formerrors.firstname && (<p className="text-danger">{formerrors.firstname}</p>
                    )}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="Enter Last name" type="text" name="lastname" value={values.lastname} onChange={handleChange} />
                    {formerrors.lastname && (<p className="text-danger">{formerrors.lastname}</p>)}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder="Enter Email ID" type="email" name="user_email" value={values.user_email} onChange={handleChange} />
                    {formerrors.user_email && (<p className="text-warning">{formerrors.user_email}</p>)}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control placeholder="Enter Phone number" type="tel" name="phone"
                    />

                  </Form.Group>
                </Col>

              </Row>



              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={3} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <ReCAPTCHA sitekey="6LcmbaMdAAAAAJz68enAze1ddTkz5V6seqyQ1--c" onChange={onChange} theme="dark" />
              </Form.Group>

              <Button variant="primary" type="submit" size="lg" >
                Send
              </Button>
            </fieldset>
          </Form>

        </Container>

      </>

    </Layout>
  )
}


export default ContactusPage


