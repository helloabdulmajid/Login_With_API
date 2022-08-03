import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, FormGroup, Label, Input, Col, Button } from "reactstrap";
import { useState } from "react";
// import '../components/style.css'
import axios from 'axios'

const Signup = () => {
 
  const[user,setUser]=useState()

  const[status,setStatus]=useState()

  function onTextFieldChange(e){
    setUser(
      {
        ...user,
        [e.target.name]:e.target.value,
      }
    )
  }

  async function submitHandler(e) {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3333/users`, user);
      setStatus(true);
      console.log(user)
    } catch (error) {
      console.log("Something is Wrong");
    }
  }

  


  

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
                  onChange={(e) => onTextFieldChange(e)}
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
                  onChange={(e) => onTextFieldChange(e)}
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
                  onChange={(e) => onTextFieldChange(e)}
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
                  onChange={(e) => onTextFieldChange(e)}
                />
              </FormGroup>
            </Col>
          </Row>
          

          <Button className="btn" >Sign Up</Button>
        </Form>
      </div>
      
    </>
  );
};

export default Signup;
