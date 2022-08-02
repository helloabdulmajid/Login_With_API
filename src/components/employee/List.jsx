import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  TableCell,
  TableRow,
  TableHead,
  Table,
  TableContainer,
  TableBody,
  Paper,
  Tooltip,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import axios from "axios";

const List = () => {
  const [emp, setEmp] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3333/employee").then((response) => {
      // console.log(response);
      setEmp(response.data);
    });
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3333/employee/${id}`);
    var newemployee = emp.filter((item) => {
      //  console.log(item);
      return item.id !== id;
    });
    setEmp(newemployee);
  };

  return (
    <>
      <Box
        sx={{ backgroundColor: "green", color: "white" }}
        textAlign="center"
        p={2}
      >
        <Typography variant="h4">Employee List</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}>
              <TableCell align="center">No</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {emp.map((person, i) => {
              return (
                <TableRow key={i}>
                  <TableCell align="center">{i + 1}</TableCell>
                  <TableCell align="center">{person.empname}</TableCell>
                  <TableCell align="center">{person.email}</TableCell>
                  <TableCell align="center">
                    <Tooltip title="View">
                      <IconButton>
                        <Link to={`/employee/view/${person.id}`}>
                          <VisibilityIcon color="primary" />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <IconButton>
                        <Link to={`/employee/edit/${person.id}`}>
                          <EditIcon color="warning" />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton onClick={() => handleDelete(person.id)}>
                        <DeleteIcon color="secondary" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default List;
