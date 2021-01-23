import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { InputLabel, Select, MenuItem } from "@material-ui/core";

import "./index.css";
import imgBack from "../../assets/Signup/bg mar barco_Prancheta 1.png";
import Navbar from "../../components/Navbar";
import InputDefault from "../../components/InputDefault";
import { createUser as create } from "../../services/userServices";

function SingUp() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const changeName = (nome: string) => {
    setNome(nome);
  }
  const changeEmail = (email: string) => {
    setEmail(email);
  }
  const changeSenha = (senha: string) => {
    setSenha(senha);
  }

  const createUser = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const newUser ={
        email, nome, senha
      }
      const createdUser = await create(newUser);
      console.log(createdUser);
      setNome("")
      setEmail("")
      setSenha("")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar route="singup" placeholder="Busque um freelancer ..." title="JOB SEA" />
      <Container>
        <ImageBackground src={imgBack} />
        <Content>
          <TitleSingup>CADASTRE-SE</TitleSingup>
          <Form onSubmit={createUser} >
            <InputDefault style={{ flex: 1, minWidth: "90%" }} name="nome" placeholder="Nome" newValue={changeName} />
            <InputDefault style={{ flex: 1, minWidth: "90%" }} name="email" placeholder="E-Mail" newValue={changeEmail} />
            <InputDefault style={{ flex: 1, minWidth: "90%" }} name="senha" placeholder="Senha" newValue={changeSenha} />
            <div style={{ display: "flex", flex: 1, maxHeight: "60px", flexDirection: "column", minWidth: "90%" }}>
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
                type="submit"
                onClick={createUser}
              >
                {/* <Link style={{ color: "#3c7380", fontWeight: "bold" }} > */}
                  Pronto
                {/* </Link> */}
              </button>
            </ButtonArea>
          </Form>
        </Content>
      </Container>
    </>
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
  max-height:80vh;
  border-radius:10px;
  margin-top: 80px;
  flex: 5;
  flex-direction: column;
  display: flex;
  align-items: center;
  background-color: #3c7380;
  z-index: 1;
  opacity: 0.90;
  padding: 0 10px;
  @media(min-width: 680px){
    width:565px;
  }
`;

const ImageBackground = styled.img`
  position: absolute;
  z-index: 0;
  height: 100vh;
  width: 100vw;
  object-fit: cover;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
`;

const TitleSingup = styled.h4`
  font-family: DesirasNonCommercial;
  color:#fff;
  margin-top:25px;
  margin-bottom:10px;
`

