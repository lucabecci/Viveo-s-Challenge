import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          ViveoCalculator
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/calculator">
                Calculator
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/creator">
                Creator
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navigation;
