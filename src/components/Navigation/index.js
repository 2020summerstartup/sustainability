import React from "react";
import { Link } from "react-router-dom";

import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";

import "./index.css";

// import your fontawesome library
import "../FontAwesomeIcons";
// import when you need to use icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// users can only see certain pages when nonauthorized/authorized
const Navigation = ({ authUser }) => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

// start making fancy navbar!

// user is authorized
const NavigationAuth = () => (
  <div>
    <body>
      <nav class="navbar">
        <ul class="navbar-nav">
          <li class="logo">
            <a href="#" class="nav-link">
              <span class="link-text logo-text">Go Green</span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="angle-double-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
              >
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                    class="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                    class="fa-primary"
                  ></path>
                </g>
              </svg>
            </a>
          </li>

          <li class="nav-item hide">
            <a href="#" class="nav-link">
              <FontAwesomeIcon icon="leaf" className="icons" />
              <Link to={ROUTES.LANDING} class="link-text">
                Landing
              </Link>
            </a>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <FontAwesomeIcon icon="home" className="icons" />
              <Link to={ROUTES.HOME} class="link-text">
                Home
              </Link>
            </a>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <FontAwesomeIcon icon="trophy" className="icons" />
              <Link to={ROUTES.ADMIN} class="link-text">
                Admin
              </Link>
            </a>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <FontAwesomeIcon icon="info" className="icons" />
              <Link to={ROUTES.INFO} class="link-text">
                Info
              </Link>
            </a>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <FontAwesomeIcon icon="user" className="icons" />
              <Link to={ROUTES.ACCOUNT} class="link-text">
                Account
              </Link>
            </a>
          </li>

          <li class="nav-item logout">
            <a href="#" class="nav-link">
              <FontAwesomeIcon
                icon="sign-out-alt"
                className="icons"
              />
              <SignOutButton />
            </a>
          </li>
        </ul>
      </nav>
    </body>
  </div>
);

// user is non-authorized
const NavigationNonAuth = () => (
  <div>
    <body>
      <nav class="navbar">
        <ul class="navbar-nav">
          <li class="logo">
            <a href="#" class="nav-link">
              <span class="link-text logo-text">Go Green</span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="angle-double-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
              >
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                    class="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                    class="fa-primary"
                  ></path>
                </g>
              </svg>
            </a>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <FontAwesomeIcon icon="leaf" className="icons" />
              <Link to={ROUTES.LANDING} class="link-text">
                Landing
              </Link>
            </a>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <FontAwesomeIcon icon="user" className="icons" />
              <Link to={ROUTES.SIGN_IN} class="link-text">
                Sign In
              </Link>
            </a>
          </li>
        </ul>
      </nav>
    </body>
  </div>
);

export default Navigation;
