import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Hadouken
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item" id="navbarLink">
              <Link to={`../Games`}>Games</Link>
            </li>
            <li className="nav-item" id="navbarLink">
              <Link to={`../Account`}>Account</Link>
            </li>
            <li className="nav-item" id="navbarLink">
              <Link to={`../ComboList`}>ComboList</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
