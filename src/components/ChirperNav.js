import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class ChirperNav extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/#dashboard">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#newtweet">New Tweet</Nav.Link>
          <Nav.Link href="#tweet">Tweet Page</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default ChirperNav;
