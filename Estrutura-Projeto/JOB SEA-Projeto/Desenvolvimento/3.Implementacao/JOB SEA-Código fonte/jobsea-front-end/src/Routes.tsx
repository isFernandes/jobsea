import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
//external archives
// import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import SignUp from "./pages/SingUp";
import RememberPassword from "./pages/RememberPassword";
import Profile from './pages/Profile';
import ProjectCreate from './pages/ProjectCreate';
import ProjectSub from './pages/ProjectSub';
import UserProject from './pages/UserProject';

//rotas de navegacoa
function Routes() {
  return (
    <BrowserRouter>
      <Route exact path={["/", "/login"]} component={Login} />
      <Route path="/feed" component={Feed} />
      <Route path="/singup" component={SignUp} />
      <Route path="/remember-password" component={RememberPassword} />
      <Route path="/profile" component={Profile} />
      <Route path="/create-project" component={ProjectCreate} />
      <Route path="/sub-project" component={ProjectSub} />
      <Route path="/user-projects" component={UserProject} />
    </BrowserRouter>
  );
}

export default Routes;



