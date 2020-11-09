import React from "react";
import caravelaLogo from "../../assets/caravela-1.png";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import "./index.css";
import TextField from "@material-ui/core/TextField";

const Navbar: React.FC = () => {
  return (
    <header
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flex: 1,
        }}
      >
        <a href="#/feed">
          <img src={caravelaLogo} style={{ width: "45px", height: "45px" }} />
        </a>
        <TextField
          id="outlined-basic"
          label="Pesquise..."
          variant="outlined"
          size="small"
          style={{
            display: "flex",
            marginLeft: 20,
            alignSelf: "center",
            flex: 1,
          }}
        />
      </section>
      <section style={{ display: "flex", flex: 1.5 }}></section>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          flex: 1,
        }}
      >
        <a href="#/" style={{ color: "black" }}>
          Seus projetos
        </a>
        <a
          target="about_blank"
          href="https://www.linkedin.com/in/iago-fernandes/"
        ></a>
        <AppsOutlinedIcon
          fontSize="large"
          style={{ alignSelf: "center", display: "flex" }}
        />
      </section>
    </header>
  );
};

export default Navbar;
