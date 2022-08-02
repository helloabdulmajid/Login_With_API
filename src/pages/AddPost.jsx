import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, FormGroup, Label, Input, Col, Button } from "reactstrap";
import { useState } from "react";
// import '../components/style.css'
import { ToastContainer} from 'react-toastify';



const AddPost = () => 
{
  

const [title,setTitle]=useState("")
const [body,setBody]=useState("")



 // form data submit
  const submitHandler = async (event) => {
    event.preventDefault();
    const submitForm = new FormData();
    submitForm.append("title", title);
    submitForm.append("body", body);

    console.log(title);
    console.log(body);



  
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title:title,
          body: body,
          userId: 1,
    
      
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
  
   
   
  }

  return (
    <>
    <div className="signupdiv">
      <Form onSubmit={submitHandler}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter Title"
                type="text" 
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="body">Body</Label>
              <Input
                id="body"
                name="body"
                placeholder="Enter Body"
                type="text"
                onChange={(e) => setBody(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        
      
       
        
        <Button className="btn">Add Post</Button>
        <ToastContainer />

      </Form>
      </div>
    </>
  );
};

export default AddPost;
