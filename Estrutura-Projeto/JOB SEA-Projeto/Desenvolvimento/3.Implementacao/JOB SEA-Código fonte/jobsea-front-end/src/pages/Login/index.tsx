import React from "react";
import styled from "styled-components";
import "./index.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Container>
      <Form>
        <h3>Esqueceu a sua senha</h3>
        <p className="paragraph">
          Insira seu email de cadastro para enviarmos a chave de recuperação!
        </p>
        <TextField
          id="standard-basic"
          className="input-style"
          type="email"
          label="E-mail"
        ></TextField>
        <ButtonArea className="input-style">
            <Button variant="outlined">
                <Link className="button-text" to="/">Lembrei a senha!</Link>
            </Button>
            <Button color="primary" variant="contained">
                <span>Enviar</span>
            </Button>
        </ButtonArea>
      </Form>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  margin: 0 10rem 0 10rem;
`;

const ButtonArea = styled.div`
  margin: 2rem 8px 8px 8px;
  display: flex;
  max-width: 350px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;
