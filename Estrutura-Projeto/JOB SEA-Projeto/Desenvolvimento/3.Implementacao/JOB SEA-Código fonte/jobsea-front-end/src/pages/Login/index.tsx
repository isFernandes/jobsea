import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import "./index.css";
import ButtonOutlined from "../../components/ButtonOutlined";
import ButtonContained from "../../components/ButtonContained";
import InputDefault from "../../components/InputDefault";
import imgBackground from "../../assets/HomePage/fundo@72x.png";
import { login } from "../../rootReducer/ducks/auth";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link, Redirect } from "react-router-dom";

import logotipeMain from "../../assets/HomePage/logotipo-caravela@72x.png";
import Message from "../../components/Message";

function Login(props: any) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { isLoggedIn } = useSelector((state: RootStateOrAny) => state.auth);
  const { message } = useSelector((state: RootStateOrAny) => state.message);

  const changeEmail = (email: string) => {
    setEmail(email)
  }
  const changePass = (pass: string) => {
    setPass(pass)
  }

  useEffect(() => {

    const redirectFeed = () => {
      if (isLoggedIn) {
        props.history.push("/feed");
        window.location.reload();
        return <Redirect to="/feed" />
      }
    }

    redirectFeed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn])
  const handleSubmit = async () => {
    try {
      await dispatch(login(email, pass))
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <Container>
      <ImageBackground src={imgBackground} />
      <Content>
        <Logo src={logotipeMain} />
        <Form onSubmit={handleSubmit} >
          <h1>Login</h1>

          <InputDefault style={{ minWidth: "90%", marginBottom: "15px", marginTop: "25px" }} name="email-login" placeholder="E-MAIL" type="email" newValue={changeEmail} />
          <InputDefault style={{ minWidth: "90%", marginTop: "15px", marginBottom: "15px" }} name="password-login" placeholder="Senha" type="password" newValue={changePass} />
          {message ? Message(message) : ""}
          <ButtonArea id="buttonArea" className="input-style">
            <ButtonOutlined text="Esqueci a senha" routeParams="/remember-password" />
            <ButtonContained text="Entrar" type="submit" onClick={handleSubmit} />
           
          </ButtonArea>
          <Link to="/singup" style={{ marginBottom: "10px", marginTop: "10px", fontSize: "20px", letterSpacing: "2px", textDecoration: "none", color: "white", fontFamily: "DesirasNonCommercial" }} >Cadastre-se</Link>
        </Form>
      </Content>
      <FooterText>ENCONTRE SEU JOB NESSE MAR DE OPORTUNIDADES . . .</FooterText>
    </Container>
  );
}

export default Login;

const FooterText = styled.p`
    font-family: DesirasNonCommercial;
    color: #ffffff;
    font-size: 24px;
    text-align: center;
    letter-spacing:1.5px;
    word-wrap: break-word;
    z-index:2;
`;

const Container = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  height: 100%;
   width: 100%;
   align-self: center;
  `;
const Content = styled.div`
  display:flex;
  width:90vw;
  justify-content:center;
  @media(max-width:700px){
    flex-direction:column;
  }
  `;

const Logo = styled.img`
  position: relative;
  max-height: 250px;
  display: flex;
  align-self: center;
  margin-right:25px;
  @media(max-width: 700px){
    height: 180px;
    margin-top: 0;
  }
`;

const Form = styled.form`
  background-color: #3c7380;
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex: 2;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  opacity: 0.95;
  max-width: 500px;
  border-radius: 4px;
  padding-bottom:10px;
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
  max-height: 60px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex: 1;
`;
