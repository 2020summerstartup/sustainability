import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "../components/Navigation";
import BottomNav from "../components/Navigation/bottomNav";
import LandingPage from "../pages/LandingPage";
import MuiLandingPage from "../pages/LandingPage/muiLandingPage";
import SignUpPage from "../pages/RegisterPage/signUpPage";
import SignInPage from "../pages/RegisterPage/signInPage";
import MuiSignInPage from "../pages/RegisterPage/muiSignInPage";
import MuiSignUpPage from "../pages/RegisterPage/muiSignupPage.js";
import PasswordForgetPage from "../pages/RegisterPage/passwordForgetPage";
import MuiPasswordForgetPage from "../pages/RegisterPage/muiPasswordForgetPage";
import HomePage from "../pages/HomePage";
import AccountPage from "../pages/AccountPage";
import InfoPage from "../pages/InfoPage";
import Header, {
  HomeHeader,
  CompeteHeader,
  InfoHeader,
  AccountHeader,
  BackArrowHeader,
} from "../components/Headers";
import CompetePage from "../pages/CompetePage";
import OfflinePage from "../pages/OfflinePage";
import MuiOfflinePage from "../pages/OfflinePage/muiOfflinePage";
import ChangePW from "../pages/AccountPage/Settings/changePw";
import MuiChangePw from "../pages/AccountPage/Settings/muiChangePw";
import ChangeDorm from "../pages/AccountPage/Settings/changeDorm";
import MuiChangeDorm from "../pages/AccountPage/Settings/muiChangeDorm";
import DeleteAccount from "../pages/AccountPage/Settings/deleteAccount";
import * as ROUTES from "../constants/routes";
import { withAuthentication } from "../services/Session";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/home" component={HomeHeader} />
      <Route exact path="/compete" component={CompeteHeader} />
      <Route exact path="/info" component={InfoHeader} />
      <Route exact path="/account" component={AccountHeader} />
      <Route exact path="/signup" component={BackArrowHeader} />
      <Route exact path="/changedorm" component={BackArrowHeader} />
      <Route exact path="/changepassword" component={BackArrowHeader} />
      <Route exact path="/forgetpassword" component={BackArrowHeader} />
      <Route exact path="/delete-account" component={DeleteAccount} />
      <Route component={Header} />
    </Switch>
    <div className="main">
      {/* {window.location.pathname !== "/account" ? <Header /> : <AccountHeader /> }  */}

      <Navigation />
      <BottomNav />

      <Route exact path={ROUTES.LANDING} component={MuiLandingPage} />
      <Route path={ROUTES.SIGN_UP} component={MuiSignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={MuiSignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={MuiPasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.INFO} component={InfoPage} />
      <Route path={ROUTES.COMPETE} component={CompetePage} />
      <Route path={ROUTES.OFFLINE} component={MuiOfflinePage} />
      <Route path={ROUTES.CHANGEPW} component={MuiChangePw} />
      <Route path={ROUTES.CHANGEDORM} component={MuiChangeDorm} />
      <Route path={ROUTES.DELETE_ACCOUNT} component={DeleteAccount} />
    </div>
  </Router>
);

export default withAuthentication(App);
