import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { InputLabel, Select, MenuItem } from "@material-ui/core";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";

import "./index.css";
import imgBack from "../../assets/Signup/bg mar barco_Prancheta 1.png";
import Navbar from "../../components/Navbar";
import InputDefault from "../../components/InputDefault";
import {register} from "../../rootReducer/ducks/auth";
import Message from "../../components/Message";
import { clearMessage } from "../../rootReducer/ducks/message";

function SingUp(props:any) {
  const dispatch = useDispatch()
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  
  const { message } = useSelector((state: RootStateOrAny) => state.message);

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
      const createdUser:any = await dispatch(register(nome, email, senha))
      alert("Seu acesso foi criado com sucesso" + createdUser.nome);
      setNome("")
      setEmail("")
      setSenha("")
      props.history.push("/")
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
            <InputDefault style={{ flex: 1, minWidth: "90%" }} type="email" name="email" placeholder="E-Mail" newValue={changeEmail} />
            <InputDefault style={{ flex: 1, minWidth: "90%" }} type="password" name="senha" placeholder="Senha" newValue={changeSenha} />
            
            <ButtonArea>
              <button
                className="back-button"
                color="primary"
                onClick={()=>{
                  dispatch(clearMessage())
                }}
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
          {message ? Message(message) : ""}
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

