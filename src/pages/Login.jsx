import React from "react";
import { Grid } from "@mui/material";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, FormGroup, Label, Input, Col, Button } from "reactstrap";
import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios'

const Das1 = "./assets/images/das1.png";

const Login = () => { 
  const [logEmail, setLogEmail] = useState("");
  const [logPass, setLogPass] = useState("");
  const navigate=useNavigate()

  // const notify = () => {toast("Wow so easy !");}
  // form data submit

 
  const notify2 = () => toast.success("Login Success",{
    position: "top-center",
  });

  const notify = () => toast.error("Login Fail",{
    position: "top-center",
  });
  
  
  
  const getEmail=localStorage.getItem("Email")
  const getPass=localStorage.getItem("Password")
  console.log(getEmail)
  console.log(getPass)

  const loginHandler=(e)=>{
    e.preventDefault();
 if(getEmail===logEmail && getPass===logPass)
 {
 notify2();
 navigate('dasboard');
 }
 else{
  }
 notify();
  }
  return (
    <>
      <Grid container sx={{ height: "90vh" }}>
        <Grid
          item
          lg={7}
          sm={5}
          sx={{
            backgroundImage: `url(${Das1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>
        <Grid>
          <div className="logindiv">
            <h3>Login Page</h3>
            <Form onSubmit={loginHandler} className="loginform">
              <Row>
                <Col sm={12}>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      placeholder="Enter Email"
                      type="email"
                      onChange={(e) => setLogEmail(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      placeholder="Type password"
                      type="password"
                      onChange={(e) => setLogPass(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Button className="btn"  >Login</Button>
            </Form>
          </div>
        </Grid>
      </Grid>
      <div>
        <div>{localStorage.getItem("UserName")}</div>

        <div>{localStorage.getItem("Email")}</div>
        <div>{localStorage.getItem("Phone")}</div>
        <div>{localStorage.getItem("Password")}</div>

        <div>{localStorage.getItem("Address")}</div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default Login;
