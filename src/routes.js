import React from "react";
import { Router, Route, Redirect } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import Login from "./layouts/Login/Login.jsx";
import Admin from "./layouts/Admin/Admin.jsx";
import Client from "./layouts/Client/Client.jsx";
import SignUp from "./layouts/Signup/Signup.jsx";

const customHistory = createBrowserHistory();

const type = localStorage.getItem("type"); //update when user logs in;

function CustomRoutes() {
  function routestoRender() {
    if (type === "admin") {
      return (
        <div>
          <Route exact path="/admin" component={Admin} />
        </div>
      );
    } else if (type === "client") {
      return (
        <div>
          <Route exact path="/situationalawareness" component={Client} />
          <Route exact path="/creativity" component={Client} />
          <Route exact path="/teamwork" component={Client} />
        </div>
      );
    } else {
      return (
        <Redirect
          to={window.location.pathname === "/signup" ? "/signup" : "/"}
        />
      );
    }
  }

  return (
    <Router history={customHistory}>
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      {routestoRender()}
    </Router>
  );
}

export default CustomRoutes;
