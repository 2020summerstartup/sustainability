import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Navigation from "../components/Navigation";
import BottomNav from "../components/Navigation/bottomNav";
// import MuiLandingPage from "../pages/LandingPage/muiLandingPage";
// import MuiSignInPage from "../pages/RegisterPage/muiSignInPage";
// import MuiSignUpPage from "../pages/RegisterPage/muiSignUpPage";
// import MuiPasswordForgetPage from "../pages/RegisterPage/muiPasswordForgetPage";
// import HomePage from "../pages/HomePage";
// import AccountPage from "../pages/AccountPage";
// import InfoPage from "../pages/InfoPage";
// import CompetePage from "../pages/CompetePage";
// import MuiOfflinePage from "../pages/OfflinePage/muiOfflinePage";
// import MuiChangePw from "../pages/AccountPage/Settings/muiChangePw";
// import MuiChangeDorm from "../pages/AccountPage/Settings/muiChangeDorm";
// import DeleteAccount from "../pages/AccountPage/Settings/deleteAccount";
// import AdminPage from "../pages/AdminPage";
import RotatePage from "../pages/RotatePage";
import Header, {
  HomeHeader,
  CompeteHeader,
  // InfoHeader,
  AccountHeader,
  BackArrowSettingsHeader,
  BackArrowSettingsHeader2,
  BackArrowSettingsHeader3,
  BackArrowHeader,
  AdminHeader,
} from "../components/Headers";
import * as ROUTES from "../constants/routes";
import ProgressCircle from "../components/ProgressCircle";

import { withAuthentication } from "../services/Session";
import { withTheme } from "../components/Theme";

function retry(fn, retriesLeft = 5, interval = 1000) {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            // reject('maximum retries exceeded');
            reject(error);
            return;
          }

          // Passing on "reject" is the important part
          retry(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });
}

// React lazy
const MuiSignInPage = lazy(() =>
  retry(() => import("../pages/RegisterPage/muiSignInPage"))
);
const MuiSignUpPage = lazy(() =>
  retry(() => import("../pages/RegisterPage/muiSignUpPage"))
);
const MuiPasswordForgetPage = lazy(() =>
  retry(() => import("../pages/RegisterPage/muiPasswordForgetPage"))
);
const HomePage = lazy(() => retry(() => import("../pages/HomePage")));
const AccountPage = lazy(() =>
  retry(() => import("../pages/AccountPage"))
);
const InfoPage = lazy(() => retry(() => import("../pages/InfoPage")));
const CompetePage = lazy(() => retry(() => import("../pages/CompetePage")));
const MuiOfflinePage = lazy(() =>
  retry(() => import("../pages/OfflinePage/muiOfflinePage"))
);
const MuiChangePw = lazy(() =>
  retry(() => import("../pages/AccountPage/Settings/muiChangePw"))
);
const MuiChangeDorm = lazy(() =>
  retry(() => import("../pages/AccountPage/Settings/muiChangeDorm"))
);
const DeleteAccount = lazy(() =>
  retry(() => import("../pages/AccountPage/Settings/deleteAccount"))
);

const ContactPage = lazy(() => retry (() => import("../pages/InfoPage/fbContactForm")));

function AppBase() {
  return (
    <Router>
      <Switch>
        {/* FOR PAGES WITH SPECIAL HEADERS */}
        {/* <Route path="/home" component={HomeHeader} /> */}
        {/* <Route path="/compete" component={CompeteHeader} /> */}
        {/* <Route exact path="/info" component={InfoHeader} /> */}
        {/* <Route path="/profile" component={AccountHeader} /> */}
        <Route
          exact
          path="/deleteaccount"
          component={BackArrowSettingsHeader}
        />
        <Route exact path="/signin" component={Header} />
        <Route exact path="/signup" component={BackArrowHeader} />
        <Route exact path="/changedorm" component={BackArrowSettingsHeader} />
        <Route
          exact
          path="/changepassword"
          component={BackArrowSettingsHeader2}
        />
        <Route
          exact
          path="/forgetpassword"
          component={BackArrowSettingsHeader}
        />
        <Route exact path="/info" component={BackArrowSettingsHeader3} />
        <Route exact path="/contact" component={BackArrowSettingsHeader} />

        <Route path="/admin" component={AdminHeader} />
        {/* <Route component={Header} /> */}
      </Switch>

      <div className="main">
        {/* {window.location.pathname !== "/account" ? <Header /> : <AccountHeader /> }  */}

        <Navigation />
        <BottomNav />

        {/* <Switch> */}
        {/* For each page's content */}

        <Suspense fallback={
          <>
            <HomeHeader />
            <div className="base-container">
              <ProgressCircle />
            </div>
          </>
        }>
          <Switch>
            <Redirect exact from={ROUTES.HOME} to={ROUTES.HOME_ACTION} />
            <Route
              exact
              path="/home/:page?"
              render={(props) => <HomePage {...props} />}
            />
          </Switch>
        </Suspense>

        <Suspense fallback={
          <>
            <CompeteHeader />
            <div className="base-container">
              <ProgressCircle />
            </div>
          </>
        }>
          <Switch>
            <Redirect exact from={ROUTES.COMPETE} to={ROUTES.COMPETE_LEADERBOARD} />
            <Route
              exact
              path="/compete/:page?"
              render={(props) => <CompetePage {...props} />}
            />
          </Switch>
        </Suspense>

        <Suspense fallback={
          <>
            <AccountHeader />
            <div className="base-container">
              <ProgressCircle />
            </div>
          </>
        }>
          <Switch>
            <Redirect exact from={ROUTES.PROFILE} to={ROUTES.PROFILE_POINT} />
            <Route
              exact
              path="/profile/:page?"
              render={(props) => <AccountPage {...props} />}
            />
          </Switch>
        </Suspense>

        <Suspense
          fallback={
            <div className="base-container">
              <ProgressCircle />
            </div>
          }
        >
          {/* <Route exact path={ROUTES.LANDING} component={IntroPage} /> */}
          <Route exact path={ROUTES.LANDING} component={RotatePage} />
          {/* <Route exact path={ROUTES.LANDING_L} component={MuiLandingPage} /> */}

          <Route path={ROUTES.SIGN_UP} component={MuiSignUpPage} />

          <Route path={ROUTES.SIGN_IN} component={MuiSignInPage} />

          <Route
            path={ROUTES.PASSWORD_FORGET}
            component={MuiPasswordForgetPage}
          />

          <Route path={ROUTES.INFO} component={InfoPage} />

          <Route path={ROUTES.CONTACT} component={ContactPage} />

          <Route path={ROUTES.OFFLINE} component={MuiOfflinePage} />

          <Route path={ROUTES.CHANGEPW} component={MuiChangePw} />

          <Route path={ROUTES.CHANGEDORM} component={MuiChangeDorm} />

          <Route path={ROUTES.DELETE_ACCOUNT} component={DeleteAccount} />

          {/* <Route path={ROUTES.ADMIN} component={AdminPage} /> */}




        </Suspense>
        {/* </Switch> */}

        {/* <Switch>
        <Route exact path={ROUTES.LANDING} component={MuiLandingPage} />
        <Route path={ROUTES.SIGN_UP} component={MuiSignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={MuiSignInPage} />
        <Route
          path={ROUTES.PASSWORD_FORGET}
          component={MuiPasswordForgetPage}
        />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.INFO} component={InfoPage} />
        <Route path={ROUTES.COMPETE} component={CompetePage} />
        <Route path={ROUTES.OFFLINE} component={MuiOfflinePage} />
        <Route path={ROUTES.CHANGEPW} component={MuiChangePw} />
        <Route path={ROUTES.CHANGEDORM} component={MuiChangeDorm} />
        <Route path={ROUTES.DELETE_ACCOUNT} component={DeleteAccount} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
      </Switch> */}
      </div>
    </Router>
  );
}

const App = withTheme(AppBase);
export default withAuthentication(App);
export { retry };
