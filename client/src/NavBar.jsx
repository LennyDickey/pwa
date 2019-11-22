import React from "react";
import { Link } from "react-router-dom";
import "./views/styles.css";

const NavBar = props => {
  return (
    <nav className="NavBar navbar navbar-expand-lg fixed-top">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navigation-bar"
      >
        <span class="navbar-toggler-icon">&#9776;</span>
      </button>
      <a class="navbar-brand" href="/index">
        <img src="/data/img/moon-icon.png" alt="Logo" />
      </a>
      <div class="collapse navbar-collapse" id="navigation-bar">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <Link class="nav-link" to="/">
              Home
            </Link>
          </li>

          {props.currentUser ? (
            <span>
              <li class="nav-item">
                <Link class="nav-link" to="/rth">
                  RTH
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/logout">
                  Log Out
                </Link>
              </li>
            </span>
          ) : (
            <span>
              <li class="nav-item">
                <Link class="nav-link" to="/login">
                  Log In
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/signup">
                  Sign Up
                </Link>
              </li>
            </span>
			
          )}
		    <li class="nav-item">
            <Link class="nav-link" to="/Contact">
              Contact
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
