import React, { useState } from "react";
import { Box, Typography, Button, Grid, TextField } from "@mui/material";
// import { Typography, Box, makeStyles, Grid, TextField, Button } from "@material-ui/core";
// import { deepOrange,deepPurple ,green,red} from "@mui/material/colors";imp
import List from "../../src/components/employee/List";
import axios from "axios";

const Home = () => {
  const [emp, setEmp] = useState({
    empname: "",
    email: "",
  });
  const [status, setStatus] = useState();

  function onTextFieldChange(e) {
    setEmp({
      ...emp,
      [e.target.name]: e.target.value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3333/employee`, emp);
      setStatus(true);
    } catch (error) {
      console.log("Something is Wrong");
    }
  }
  if (status) {
    return <Home />;
  }
  return (
    <>
      <Box
        sx={{ backgroundColor: "orange", color: "white" }}
        textAlign="center"
        p={2}
        mb={2}
      >
        <Typography variant="h2">React CRUD with API Call</Typography>
      </Box>
      <Grid container justify="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box
            sx={{ backgroundColor: "green", color: "white" }}
            textAlign="center"
            p={2}
            mb={2}
          >
            <Typography variant="h4">Add Employee</Typography>
          </Box>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
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
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
                onClick={(e) => onFormSubmit(e)}
              >
                Add
              </Button>
            </Box>
          </form>
        </Grid>

        <Grid item md={6} xs={12}>
          <List />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
