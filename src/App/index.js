import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Navigation from "../components/Navigation";
import BottomNav from "../components/Navigation/bottomNav";
import RotatePage from "../pages/RotatePage";
import AccountPage from "../pages/AccountPage"
import Header, {
  HomeHeader,
  CompeteHeader,
  AccountHeader,
  BackArrowSettingsHeader,
  BackArrowSettingsHeader2,
  BackArrowSettingsHeader3,
  BackArrowHeader,
} from "../components/Headers";
import * as ROUTES from "../constants/routes";
import ProgressCircle from "../components/ProgressCircle";

import { AuthUserContext, withAuthentication } from "../services/Session";
import { withTheme } from "../components/Theme";
import AudioContextProvider from "../pages/AccountPage/Settings/audioContext"

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

// React lazy imports
const SignInPage = lazy(() =>
  retry(() => import("../pages/RegisterPage/signInPage"))
);
const SignUpPage = lazy(() =>
  retry(() => import("../pages/RegisterPage/signUpPage"))
);
const PasswordForgetPage = lazy(() =>
  retry(() => import("../pages/RegisterPage/passwordForgetPage"))
);
const HomePage = lazy(() => retry(() => import("../pages/HomePage")));
// const AccountPage = lazy(() =>
//   retry(() => import("../pages/AccountPage"))
// );
const InfoPage = lazy(() => retry(() => import("../pages/InfoPage")));
const CompetePage = lazy(() => retry(() => import("../pages/CompetePage")));
const ChangePw = lazy(() =>
  retry(() => import("../pages/AccountPage/Settings/changePw"))
);
const ChangeDorm = lazy(() =>
  retry(() => import("../pages/AccountPage/Settings/changeDorm"))
);
const DeleteAccount = lazy(() =>
  retry(() => import("../pages/AccountPage/Settings/deleteAccount"))
);

const ContactPage = lazy(() => retry (() => import("../pages/InfoPage/fbContactForm")));

function AppBase() {
  return (
    <AudioContextProvider>
    <AuthUserContext.Consumer>
    {(authUser) => (
      <Router>
      <Switch>
        {/* FOR PAGES WITH SPECIAL HEADERS */}
        {/* home, compete & profile headers not here because they the fallback Suspense in each pages's content*/}
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
        <Route exact path="/index.html" component={Header}/>

        {/* <Route component={Header} /> */}
      </Switch>

      <div className="main">
        <Navigation />
        <BottomNav />

        {/* For each page's content */}
        {/* HOMEPAGE CONTENT */}
        <Suspense
          fallback={
            <>
              <HomeHeader />
              <div className="base-container">
                <ProgressCircle />
              </div>
            </>
          }
        >
          <Switch>
            <Redirect exact from={ROUTES.HOME} to={ROUTES.HOME_ACTION} />
            <Route
              exact
              path="/home/:page?"
              render={(props) => <HomePage {...props} />}
            />
          </Switch>
        </Suspense>

        {/* COMPETEPAGE CONTENT */}
        <Suspense
          fallback={
            <>
              <CompeteHeader />
              <div className="base-container">
                <ProgressCircle />
              </div>
            </>
          }
        >
          <Switch>
            <Redirect
              exact
              from={ROUTES.COMPETE}
              to={ROUTES.COMPETE_LEADERBOARD}
            />
            <Route
              exact
              path="/compete/:page?"
              render={(props) => <CompetePage {...props} />}
            />
          </Switch>
        </Suspense>

        {/* PROFILEPAGE CONTENT */}
        <Suspense
          fallback={
            <>
              <AccountHeader />
              <div className="base-container">
                <ProgressCircle />
              </div>
            </>
          }
        >
          <Switch>
            <Redirect exact from={ROUTES.PROFILE} to={ROUTES.PROFILE_POINT} />
            <Route
              exact
              path="/profile/:page?"
              render={(props) => <AccountPage {...props} />}
            />
          </Switch>
        </Suspense>

        {/* OTHER CONTENT */}
        <Suspense
          fallback={
            <div className="base-container">
              <ProgressCircle />
            </div>
          }
        >
          <Route exact path={ROUTES.LANDING} component={RotatePage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route
            path={ROUTES.PASSWORD_FORGET}
            component={PasswordForgetPage}
          />
          <Route path={ROUTES.INFO} component={InfoPage} />
          <Route path={ROUTES.CONTACT} component={ContactPage} />
          <Route path={ROUTES.CHANGEPW} component={ChangePw} />
          <Route path={ROUTES.CHANGEDORM} component={ChangeDorm} />
          <Route path={ROUTES.DELETE_ACCOUNT} component={DeleteAccount} />
          <Route exact path="/index.html" component={SignInPage} alias={ROUTES.SIGN_IN}/>
        </Suspense>
      </div>
    </Router>
    )}
    </AuthUserContext.Consumer>
    </AudioContextProvider>
  );
}

const App = withTheme(AppBase);
export default withAuthentication(App);
export { retry };
