import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.svg";

class ChirperNav extends Component {
  render() {
    return (
      <nav className="nav">
        <div>
          <img className="primary-icon" src={logo} alt="logo"/>
        </div>
        <ul className="nav-list">
          <li className="list-item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/new" activeClassName="active">
              New Tweet
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default ChirperNav;
