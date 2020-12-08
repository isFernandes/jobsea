import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import "./index.css";
import imgBack from "../../assets/Signup/bg mar barco_Prancheta 1.png";
import Navbar from "../../components/Navbar";

function SingUp() {
  return (
    <Form action="POST" method="post">
      <Navbar placeholder="Busque um freelancer ..." title="JOB SEA" />
      <ImageBackground src={imgBack} />
      <Content>
        <h4>CADASTRE-SE</h4>
        <TextField
          id="standard-basic"
          className="input-style"
          type="text"
          label="Nome"
        />
        <TextField
          id="standard-basic"
          className="input-style"
          type="email"
          label="Sobrenome"
        />
        <TextField
          id="standard-basic"
          className="input-style"
          type="email"
          label="E-mail"
        />
        <TextField
          id="standard-basic"
          className="input-style"
          type="password"
          label="Senha"
        />
        <TextField
          id="standard-basic"
          className="input-style"
          type="password"
          label="Confirme a senha"
        />
        <TextField
          id="date"
          className="input-style"
          type="date"
          label="Data de Nascimento"
          defaultValue="1980-01-01"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <InputLabel id="demo-simple-select-label" className="inputLabel">
          Função
        </InputLabel>
        <Select
          className="select"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          <MenuItem value={1}>Realizar projetos</MenuItem>
          <MenuItem value={2}>Publicar projetos</MenuItem>
          <MenuItem value={3}>Realizar e publicar projetos</MenuItem>
        </Select>

        <ButtonArea>
          <button
            className="back-button"
            color="primary"
          >
            <Link className="linking-text" to="/">
              Voltar
            </Link>
          </button>
          <button
            className="done-button"
            color="primary"
          >
            <Link style={{color:"#3c7380", fontWeight:"bold"}} to="/feed">
              Pronto
            </Link>
          </button>
        </ButtonArea>
      </Content>
    </Form>
  );
}

export default SingUp;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  min-height: 100%;
  z-index: 1;
`;

const Content = styled.div`
  flex: 5;
  flex-direction: column;
  display: flex;
  width: 565px;
  align-items: center;
  background-color: #3c7380;
  z-index: 1;
  opacity: 0.90;
`;

const ImageBackground = styled.img`
  position: absolute;
  z-index: 0;
  height: 100vh;
  width: 100vw;
`;

const ButtonArea = styled.div`
  width: 500px;
  display: flex;
  flex: 0.5;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
