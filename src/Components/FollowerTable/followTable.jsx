import Records from "./data.json";
import "./followers.css";
//import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Followers = () => {
  return (
    <div>
      {Records &&
        Records.map((record) => {
          return (
            <div key={record.id}>
              <TableContainer component={Paper} style={{ width: "1000px" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>

                      <TableCell>Name</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>.</TableCell>
                    </TableRow>
                  </TableHead>

                  {record.followers &&
                    record.followers.map((data) => {
                      return (
                        <TableBody>
                          <TableRow>
                            <TableCell>{data.id}</TableCell>
                            {/*<TableCell>
                              <span className="user-logo">
                                <img
                                  src={require("./Profile-icon.png")}
                                  alt="i"
                                  className="pro-img"
                                ></img>
                              </span>
                      </TableCell>*/}
                            <TableCell>{data.followerProfileName}</TableCell>
                            <TableCell>Following</TableCell>
                            <TableCell>
                              <button className="pro-button">Unfollow</button>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      );
                    })}
                </Table>
              </TableContainer>
            </div>
          );
        })}
    </div>
  );
};

export default Followers;
