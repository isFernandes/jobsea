import React from "react";
import styled from "styled-components";
import './index.css';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Container>
      <Form action="POST" method="post">
        <LoginField>
          <h4>Entre</h4>
          <TextField type="email" label="E-mail"></TextField>
          <TextField
            id="standard-basic"
            type="password"
            label="Senha"
          ></TextField>
          <ButtonArea>
            <Button className="button" color="primary">
              <Link className="linking" to="/esqueceu-senha">Esqueceu a Senha?</Link>
            </Button>
            <Button className="button" variant="contained" color="primary" type="submit">
              <Link className="linking-button" to="/feed">Entrar</Link>
            </Button>
          </ButtonArea>
        </LoginField>
        <blockquote>
          <h4>Cadastre - se</h4>
          <p>Não está cadastrado? Realize seu cadastro agora! <Link className="linking" to="/signup">Clique aqui</Link> </p>
        </blockquote>
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
  flex-direction: row;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  margin: 0 10rem 0 10rem;
`;

const LoginField = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;
  justify-content: space-between;
`;

const ButtonArea = styled.div`
  margin: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;
