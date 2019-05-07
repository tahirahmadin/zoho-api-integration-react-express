import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
class App extends Component {
  state = { contacts: [] };

  componentDidMount() {
    fetch("http://localhost:5002")
      .then(res => res.json())
      .then(contacts => this.setState({ contacts }));
  }
  render() {
    const styles = {
      root: {
        overflowX: "auto",
        marginLeft: 40,
        marginRight: 40,
        marginTop: 10
      },
      table: {
        minWidth: 700
      }
    };
    return (
      <div>
        <Typography component="h4" variant="h4" align="center" style={{ marginTop: 30 }}>
          Zoho API Integration
        </Typography>
        <Typography component="p" variant="p" align="center" style={{ marginTop: 10, fontSize: 12 }}>
          This is integration of Zoho get api for contacts retrival as a task of React Developer Work Opportunity.
        </Typography>
        <Typography component="h4" variant="p" align="left" style={{ marginLeft: 40, marginTop: 30 }}>
          All contacts
        </Typography>
        <Paper style={styles.root}>
          <Table style={styles.table}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Name</strong>
                </TableCell>
                <TableCell align="right">
                  {" "}
                  <strong>Company Name</strong>
                </TableCell>
                <TableCell align="right">
                  {" "}
                  <strong>Email</strong>
                </TableCell>
                <TableCell align="right">
                  {" "}
                  <strong>Work Phone</strong>
                </TableCell>
                <TableCell align="right">
                  {" "}
                  <strong>GST Treatment</strong>
                </TableCell>
                <TableCell align="right">
                  {" "}
                  <strong>Receiveables</strong>
                </TableCell>
                <TableCell align="right">
                  {" "}
                  <strong>Payables</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.contacts.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.customer_name}
                  </TableCell>
                  <TableCell align="right">{row.company_name}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>

                  <TableCell align="right">{row.mobile}</TableCell>
                  <TableCell align="right">{row.gst_treatment}</TableCell>
                  <TableCell align="right">{row.outstanding_receivable_amount}</TableCell>
                  <TableCell align="right">{row.outstanding_payable_amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>

        <ul />
      </div>
    );
  }
}
export default App;
