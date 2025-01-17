import React, {FormEvent, useState} from "react";
import styled from "styled-components";
import "./index.css";
import bgRemember from "../../assets/RememberPassword/bg_remember.png";
import ButtonOutlined from "../../components/ButtonOutlined";
import ButtonContained from "../../components/ButtonContained";
import InputDefault from "../../components/InputDefault";

function EsqueceuSenha() {
  const [email, setEmail] = useState("");

  const changeEmail = (email:string)=>{
    setEmail(email)
  }

  const handleSubmit =(e: FormEvent)=>{
    e.preventDefault();

    console.log(email)
  }

  return (
    <Container>
      <ImageBackground src={bgRemember} />
      <Form onSubmit={handleSubmit} >
        <h1>Esqueceu a sua senha</h1>
        <p className="paragraph">
          Insira seu email de cadastro para enviarmos a chave de recuperação!
        </p>
        <InputDefault style={{minWidth:"90%"}} name="email-remember" placeholder="E-MAIL" newValue={changeEmail}/>
        <ButtonArea className="input-style">
          <ButtonOutlined text="Lembrei a senha" routeParams="/"/>
          <ButtonContained text="Enviar" />
        </ButtonArea>
      </Form>
    </Container>
  );
}

export default EsqueceuSenha;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
   width: 100%;
   align-self: center;
  `;

const Form = styled.form`
  background-color: #3c7380;
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  opacity: 0.95;
  max-width: 700px;
  border-radius: 4px;
  @media(max-width:650px){
    max-width: 85%;
    padding:8px;
    align-self: center;
    justify-self: center;
  }
`;

const ImageBackground = styled.img`
  position: absolute;
  z-index: 0;
  height: 100vh;
  width: 100vw;
`;

const ButtonArea = styled.div`
  margin: 2em 8px 8px 8px;
  display: flex;
  max-width: 350px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex: 1;
`;
