import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "../components/Navigation";
import BottomNav from "../components/Navigation/bottomNav";
import MuiLandingPage from "../pages/LandingPage/muiLandingPage";
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
import Header, {
  HomeHeader,
  CompeteHeader,
  InfoHeader,
  AccountHeader,
  BackArrowHeader,
} from "../components/Headers";
import * as ROUTES from "../constants/routes";

import { withAuthentication } from "../services/Session";
import { withTheme } from "../components/Theme";

// React lazy
// const MuiLandingPage = lazy(() =>
//   import("../pages/LandingPage/muiLandingPage")
// );
const MuiSignInPage = lazy(() => import("../pages/RegisterPage/muiSignInPage"));
const MuiSignUpPage = lazy(() => import("../pages/RegisterPage/muiSignUpPage"));
const MuiPasswordForgetPage = lazy(() =>
  import("../pages/RegisterPage/muiPasswordForgetPage")
);
const HomePage = lazy(() => import("../pages/HomePage"));
const AccountPage = lazy(() => import("../pages/AccountPage"));
const InfoPage = lazy(() => import("../pages/InfoPage"));
const CompetePage = lazy(() => import("../pages/CompetePage"));
const MuiOfflinePage = lazy(() =>
  import("../pages/OfflinePage/muiOfflinePage")
);
const MuiChangePw = lazy(() =>
  import("../pages/AccountPage/Settings/muiChangePw")
);
const MuiChangeDorm = lazy(() =>
  import("../pages/AccountPage/Settings/muiChangeDorm")
);
const DeleteAccount = lazy(() =>
  import("../pages/AccountPage/Settings/deleteAccount")
);
const AdminPage = lazy(() => import("../pages/AdminPage"));

function AppBase() {
  return (
    <Router>
      <Switch>
        {/* FOR PAGES WITH SPECIAL HEADERS */}
        <Route exact path="/home" component={HomeHeader} />
        <Route exact path="/compete" component={CompeteHeader} />
        <Route exact path="/info" component={InfoHeader} />
        <Route exact path="/account" component={AccountHeader} />
        <Route exact path="/deleteaccount" component={BackArrowHeader} />
        <Route exact path="/signup" component={BackArrowHeader} />
        <Route exact path="/changedorm" component={BackArrowHeader} />
        <Route exact path="/changepassword" component={BackArrowHeader} />
        <Route exact path="/forgetpassword" component={BackArrowHeader} />
        <Route component={Header} />
      </Switch>

      <div className="main">
        {/* {window.location.pathname !== "/account" ? <Header /> : <AccountHeader /> }  */}

        <Navigation />
        <BottomNav />

        {/* <Switch> */}
        {/* For each page's content */}
        <Route exact path={ROUTES.LANDING} component={MuiLandingPage} />

        <Suspense fallback={<div>Loading...</div>}>
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

// function WaitingComponent(Component) {
//   return (props) => (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Component
//     </Suspense>
//   );
// }

const App = withTheme(AppBase);
export default withAuthentication(App);
