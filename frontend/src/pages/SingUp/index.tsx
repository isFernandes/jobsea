import React from "react";
import styled from "styled-components";
import "./index.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

function SingUp() {
  return (
    <Form action="POST" method="post">
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

        <InputLabel id="demo-simple-select-label" className="inputLabel" >Função</InputLabel>
        <Select className="select" labelId="demo-simple-select-label" id="demo-simple-select">
          <MenuItem value={1}>Realizar projetos</MenuItem>
          <MenuItem value={2}>Publicar projetos</MenuItem>
          <MenuItem value={3}>Realizar e publicar projetos</MenuItem>
        </Select>
      </Content>
      <ButtonArea>
        <Button style={{ marginRight: 20 }} variant="contained" color="primary">
          <Link className="linking-text" to="/">
            Voltar
          </Link>
        </Button>
        <Button style={{ marginRight: 20 }} variant="contained" color="primary">
          <Link className="linking-text" to="/feed">
            Pronto
          </Link>
        </Button>
      </ButtonArea>
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
  padding: 5px;
  height: 98.5%;
`;

const Content = styled.div`
  flex: 5;
  flex-direction: column;
  display: flex;
  width: 600px;
  align-items: center;
`;

const ButtonArea = styled.div`
  width: 500px;
  display: flex;
  flex: 0.5;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
