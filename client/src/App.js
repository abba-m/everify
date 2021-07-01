import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { connect } from "react-redux";

//Assets
import "bootstrap/dist/css/bootstrap.min.css";

//actions

//Component imports
import NavBar from "./components/nav";
import Login from "./pages/login";
import Selectcourse from "./pages/selectCourse";
import ScanPage from "./pages/scanPage";
import List from "./pages/list";
import Settings from "./pages/settings";
import Profile from "./pages/profile";
//import NotFound from "./pages/notFound";
import QrCode from "./components/qrCodeGen";

function App({ isAuthenticated, user, logout }) {
  return (
    <div className="App">
      <Router>
        <Route path="/login">
          {!isAuthenticated ? <Login /> : <Redirect to="/home" />}
        </Route>
        <Switch>
          {isAuthenticated ? (
            <>
              <Route component={NavBar} />
              <Route path={["/", "/home"]} exact component={Selectcourse} />
              <Route path="/home/scan/" component={ScanPage} />
              <Route path="/list" component={List} />
              <Route path="/student/image" component={QrCode} />
              <Route path="/settings" component={Settings} />
              <Route path="/profile" component={Profile} />
            </>
          ) : (
            <Redirect to="/login" />
          )}
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps)(App);
