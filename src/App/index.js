import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 
import Navigation from '../components/Navigation';
import LandingPage from '../pages/LandingPage';
import SignUpPage from '../pages/RegisterPage/signUpPage';
import SignInPage from '../pages/RegisterPage/signInPage';
import PasswordForgetPage from '../pages/RegisterPage/passwordForgetPage.js.js';
import HomePage from '../pages/HomePage';
import AccountPage from '../components/Account';
import InfoPage from '../components/Info';
import Header, {AccountHeader, ChangeHeader} from '../components/Headers';
import CompetePage from '../pages/CompetePage';
import OfflinePage from '../pages/OfflinePage';
// import AccountHeader from '../AccountHeader';
import ChangePW from "../components/PasswordChange/changePw.js";
import ChangeDorm from "../components/PasswordChange/changeDorm.js";
// import ChangeHeader from "../ChangeHeader";

import * as ROUTES from '../constants/routes';
import { withAuthentication } from '../services/Session';
// import AccountHeader from '../AccountHeader';

const App = () => (
  <Router>
     <Switch>
      <Route exact path="/account" component={AccountHeader} />
      <Route exact path="/changedorm" component={ChangeHeader} />
      <Route exact path="/changepassword" component={ChangeHeader} />
      <Route component={Header} />
    </Switch> 
    <div className="main">
    
    {/* {window.location.pathname !== "/account" ? <Header /> : <AccountHeader /> }  */}
    
      <Navigation />
 
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.INFO} component={InfoPage} />
      <Route path={ROUTES.COMPETE} component={CompetePage} />
      <Route path={ROUTES.OFFLINE} component={OfflinePage} />
      <Route path={ROUTES.CHANGEPW} component={ChangePW} />
      <Route path={ROUTES.CHANGEDORM} component={ChangeDorm} />

    </div>
  </Router>
);
 
export default withAuthentication(App);