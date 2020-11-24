import React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";

import "./index.css";

const Navbar: React.FC = () => {
  return (
    <header>
      <Link to="/feed">
        <button></button>
      </Link>
    </header>
  );
};

export default Navbar;

