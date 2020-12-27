import React, {FormEvent,useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {InputLabel, Select, MenuItem} from "@material-ui/core";

import "./index.css";
import imgBack from "../../assets/Signup/bg mar barco_Prancheta 1.png";
import Navbar from "../../components/Navbar";
import InputDefault from "../../components/InputDefault";

function SingUp() {
  const [nome, setNome] = useState("")
  const [Email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const changeName = (nome:string)=>{
    setNome(nome);
  }
  const createUser = async(e:FormEvent)=>{
    e.preventDefault();

  }

  return (
    <Container>
      <Navbar placeholder="Busque um freelancer ..." title="JOB SEA" />
      <ImageBackground src={imgBack} />
      <Content>
        <h4>CADASTRE-SE</h4>
        <Form onSubmit={createUser} >
          <InputDefault name="nome" placeholder="Nome" />
          <InputDefault name="sobrenome" placeholder="Sobrenome" />
          <InputDefault name="email" placeholder="E-Mail" />
          <InputDefault name="senha" placeholder="Senha" />
          <InputDefault name="confirmeSenha" placeholder="Confirme a Senha" />
          <InputDefault name="Data" placeholder="Data de Nascimento" />
          <div style={{ display: "flex", flex: 1, maxHeight: "60px", flexDirection: "column", minWidth: "100%" }}>
            <InputLabel id="select-label" className="inputLabel">
              Função
         </InputLabel>
            <Select
              className="select"
              labelId="select-label"
              id="simple-select"
            >
              <MenuItem value="" disabled>
                Função
            </MenuItem>
              <MenuItem value={1}>Realizar projetos</MenuItem>
              <MenuItem value={2}>Publicar projetos</MenuItem>
              <MenuItem value={3}>Realizar e publicar projetos</MenuItem>
            </Select>
          </div>
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
              <Link style={{ color: "#3c7380", fontWeight: "bold" }} to="/feed">
                Pronto
             </Link>
            </button>
          </ButtonArea>
        </Form>
      </Content>
    </Container>
  );
}

export default SingUp;

const Form = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  z-index: 1;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  min-height: 100%;
  z-index: 1;
`;

const Content = styled.div`
margin-top: 70px;
  flex: 5;
  flex-direction: column;
  display: flex;
  width: 565px;
  align-items: center;
  background-color: #3c7380;
  z-index: 1;
  opacity: 0.90;
  padding: 0 10px;
`;

const ImageBackground = styled.img`
  position: absolute;
  z-index: 0;
  height: 100vh;
  width: 100vw;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
`;
