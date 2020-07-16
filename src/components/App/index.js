import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import InfoPage from '../Info';
import Header, {AccountHeader, ChangeHeader} from '../Headers';
import CompetePage from '../Compete';
import OfflinePage from '../Offline';
// import AccountHeader from '../AccountHeader';
import ChangePW from "../PasswordChange/changePw.js";
import ChangeDorm from "../PasswordChange/changeDorm.js";
// import ChangeHeader from "../ChangeHeader";

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
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