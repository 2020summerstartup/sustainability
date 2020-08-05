import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../../services/Session";
import SignOutButton from "../SignOut";
import "./navigation.css";

// import your fontawesome library
import "../FontAwesomeIcons";
// import when you need to use icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// admin stuff
import * as ROLES from '../../constants/roles';

// users can only see certain pages when nonauthorized/authorized
const Navigation = ({ authUser }) => (
  <AuthUserContext.Consumer>
    {(authUser) => (authUser ? (
      <NavigationAuth authUser={authUser} />
    ) : (
        <NavigationNonAuth />
      )
    )}
  </AuthUserContext.Consumer>
);

// start making fancy navbar!

// user is authorized
const NavigationAuth = ({ authUser }) => (
  <nav className="navbar">
    <ul className="navbar-nav">
      <li className="logo">
        <span href="#" className="nav-link">
          <Link to={ROUTES.HOME} className="link-text">
            <span className="link-text logo-text">Go Green</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="angle-double-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="svg-inline--fa fa-angle-double-right fa-w-10 fa-5x"
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                  className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                  className="fa-primary"
                ></path>
              </g>
            </svg>
          </Link>
        </span>
      </li>

      <li className="nav-item">
        <span href="#" className="nav-link">
          <Link to={ROUTES.HOME} className="link-text">
            <FontAwesomeIcon icon="home" className="icons" />{" "}
            <p className="page-text">Home</p>
          </Link>
        </span>
      </li>

      <li className="nav-item">
        <span href="#" className="nav-link">
          <Link to={ROUTES.COMPETE} className="link-text">
            <FontAwesomeIcon icon="trophy" className="icons" />{" "}
            <p className="page-text">Compete</p>
          </Link>
        </span>
      </li>

      <li className="nav-item">
        <span href="#" className="nav-link">
          <Link to={ROUTES.INFO} className="link-text">
            <FontAwesomeIcon icon="info" className="icons" />
            <p className="page-text">Info</p>
          </Link>
        </span>
      </li>

      <li className="nav-item">
        <span href="#" className="nav-link">
          <Link to={ROUTES.ACCOUNT} className="link-text">
            <FontAwesomeIcon icon="user" className="icons" />
            <p className="page-text">Account</p>
          </Link>
        </span>
      </li>
      {/* Admin stuff */}
      {!!authUser.roles[ROLES.ADMIN] && (
        <li>
          <Link to={ROUTES.ADMIN}>Admin</Link>
        </li>
      )}

      <li className="nav-item logout">
        <span href="#" className="nav-link">
          <FontAwesomeIcon icon="sign-out-alt" className="icons" />
          <SignOutButton />
        </span>
      </li>

    </ul>
  </nav>
);

// user is non-authorized
const NavigationNonAuth = () => (
  <nav className="navbar">
    <ul className="navbar-nav">
      <li className="logo">
        {/* No idea why the following line needs to be "/#" when everywhere else it's fine with "#"... */}
        <a href="/#" className="nav-link">
          <span className="link-text logo-text">Go Green!</span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                className="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                className="fa-primary"
              ></path>
            </g>
          </svg>
        </a>
      </li>

      <li className="nav-item non-auth">
        <span href="#" className="nav-link">
          <Link to={ROUTES.LANDING} className="link-text">
            <FontAwesomeIcon icon="leaf" className="icons" />
            <p className="page-text">Landing</p>
          </Link>
        </span>
      </li>

      <li className="nav-item non-auth">
        <span href="#" className="nav-link">
          <Link to={ROUTES.SIGN_IN} className="link-text">
            <FontAwesomeIcon icon="user" className="icons" />
            <p className="page-text">Sign In</p>
          </Link>
        </span>
      </li>
    </ul>
  </nav>
);

export default Navigation;
