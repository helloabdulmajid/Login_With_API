import React from "react";
import { Box, Typography, Button, Grid, TextField } from "@mui/material";

import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [emp, setEmp] = useState({
    empname: "",
    email: "",
  });
  // const[status,setStatus]=useState();

  useEffect(() => {
    axios.get(`http://localhost:3333/employee/${id}`).then((response) => {
      console.log(response);
      setEmp(response.data);
    });
  }, [id]);

  function onTextFieldChange(e) {
    setEmp({
      ...emp,
      [e.target.name]: e.target.value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3333/employee/${id}`, emp);
      navigate("/");
    } catch (error) {
      console.log("Something is Wrong");
    }
  }

  //  if (status) {
  //   return <Home/>
  //  }

  return (
    <>
      <Box
        textAlign="center"
        p={2}
        mb={2}
        sx={{ backgroundColor: "green", color: "white" }}
      >
        <Typography variant="h2">
          React CRUD with API Call (Employee)
        </Typography>
      </Box>
      <Grid container justify="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box
            textAlign="center"
            p={2}
            sx={{ backgroundColor: "yellow", color: "white" }}
            mb={2}
          >
            <Typography variant="h4">Edit Employee</Typography>
          </Box>

          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={12}>
                <TextField
                  autoComplete="id"
                  name="id"
                  variant="outlined"
                  required
                  fullWidth
                  id="id"
                  label="ID"
                  autoFocus
                  value={id}
                  disabled
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="empname"
                  name="empname"
                  variant="outlined"
                  required
                  fullWidth
                  id="empname"
                  label="Name"
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="id"
                  label="email"
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="button"
                variant="contained"
                color="secondary"
                fullWidth
                onClick={(e) => onFormSubmit(e)}
              >
                Update
              </Button>
            </Box>
          </form>
          <Box m={3} textAlign="center">
            <Link to={`/`}>
              <Button type="button" variant="contained" color="secondary">
                Back to Home
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Edit;
