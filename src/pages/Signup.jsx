import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, FormGroup, Label, Input, Col, Button } from "reactstrap";
import { useState } from "react";
// import '../components/style.css'
import { ToastContainer ,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
 

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [phone, setPhone] = useState("");

  // form data submit

  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("UserName", name);
    localStorage.setItem("Email", email);
    localStorage.setItem("Phone", phone);

    localStorage.setItem("Password", pass);
  };

  const notify = () => toast.success("Registration Success",{
    position: "top-center",
  });

  return (
    <>
      <div className="signupdiv">
        <Form onSubmit={submitHandler}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter Name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Enter Phone Number"
                  type="number"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="Enter a password Number"
                  type="password"
                  onChange={(e) => setPass(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          

          <Button className="btn" onClick={notify}>Sign Up</Button>
        </Form>
      </div>
      <div>
        <div>{localStorage.getItem("UserName")}</div>

        <div>{localStorage.getItem("Email")}</div>
        <div>{localStorage.getItem("Phone")}</div>
        <div>{localStorage.getItem("Password")}</div>

      </div>
      <ToastContainer/>
    </>
  );
};

export default Signup;
