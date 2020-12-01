import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import SignUp from "./pages/SingUp";
import EsqueceuSenha from "./pages/EsqueceuSenha";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/feed" component={Feed} />
      <Route path="/signup" component={SignUp} />
      <Route path="/esqueceu-senha" component={EsqueceuSenha} />
    </BrowserRouter>
  );
}

export default Routes;
