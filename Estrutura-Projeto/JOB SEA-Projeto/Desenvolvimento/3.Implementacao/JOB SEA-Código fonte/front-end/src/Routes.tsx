import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import SignUp from "./pages/SingUp";
import RememberPassword from "./pages/RememberPassword";
import ProfileScreen from './pages/Profile';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/feed" component={Feed} />
      <Route path="/singup" component={SignUp} />
      <Route path="/esqueceu-senha" component={RememberPassword} />
      <Route path="/profile" component={ProfileScreen} />
    </BrowserRouter>
  );
}

export default Routes;



