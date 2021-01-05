import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import Landing from "./pages/Landing";
import Feed from "./pages/Feed";
import SignUp from "./pages/SingUp";
import RememberPassword from "./pages/RememberPassword";
import ProfileScreen from './pages/Profile';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/feed" component={Feed} />
      <Route path="/singup" component={SignUp} />
      <Route path="/esqueceu-senha" component={RememberPassword} />
      <Route path="/profile" component={ProfileScreen} />
    </BrowserRouter>
  );
}

export default Routes;



