import React from "react";
import {
  Box,
  Typography,
  Button,
  TableCell,
  TableRow,
  TableHead,
  Table,
  TableContainer,
  TableBody,
  Paper,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

import { Link, useParams } from "react-router-dom";

const View = () => {
  const { id } = useParams();
  const [emp, setEmp] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3333/employee/${id}`).then((response) => {
      console.log(response);
      setEmp(response.data);
    });
  }, [id]);

  return (
    <>
      <Box textAlign="center" p={2}>
        <Typography variant="h4">Employee Detail</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">{emp.id}</TableCell>
              <TableCell align="center">{emp.empname}</TableCell>
              <TableCell align="center">{emp.email}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box m={3} textAlign="center">
        <Link to={`/`}>
          <Button variant="contained" color="secondary">
            Back to Home
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default View;
