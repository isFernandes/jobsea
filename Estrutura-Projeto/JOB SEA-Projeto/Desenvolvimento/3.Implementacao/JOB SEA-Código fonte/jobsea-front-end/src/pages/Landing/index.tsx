import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


import "./index.css";
import Navbar from "../../components/Navbar";
import imgBackground from "../../assets/HomePage/fundo@72x.png";
import logotipeMain from "../../assets/HomePage/logotipo-caravela@72x.png";
import { Button } from "@material-ui/core";
// import lemeRodape from "../../assets/HomePage/leme-rodape@72x.png";

function Landing() {
  return (
    <>
      <Navbar placeholder="Busque um freelancer ..." route=" " title="J O B S E A" >
        <Children>
          <Link to="/">
            <Button variant="text" style={{ color: "white" }}>
              LOGIN
              </Button>
          </Link>
          <Link to="/singup">
            <Button
              variant="outlined"
              style={{
                color: "white",
                borderColor: "white",
                display: "flex",
                fontWeight: "bold"
              }}
            >
              Cadastre-se
              </Button>
          </Link>
        </Children>
      </Navbar>
      <Container>
        <ImageBackground src={imgBackground} />
        <LoginField>
          <Logo src={logotipeMain} />
          <ButtonArea>
            <button className="create-job" >
              <Link style={{ color: '#fff' }} className="linking-button" to="/esqueceu-senha">
                PUBLIQUE UM JOB
          </Link>
            </button>

            <button
              className="search-job"
            >
              <Link style={{ color: '#3c7380' }} className="linking-button" to="/feed">
                ENCONTRE UM JOB
          </Link>
            </button>
          </ButtonArea>
          <FooterText>ENCONTRE SEU JOB NESSE MAR DE OPORTUNIDADES . . .</FooterText>
        </LoginField>

      </Container>
    </>
  );
}

export default Landing;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
  height: 100%;
  background-repeat: no-repeat, repeat;
  background-color: #cccccc;
`;

const ImageBackground = styled.img`
  position: absolute;
  z-index: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;


const LoginField = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  z-index: 1;
  margin: 80px 0 0 0; 
`;

const ButtonArea = styled.div`
  margin: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
  align-self: center;
  padding: 5px;
  flex:1;
  @media(max-width: 700px){
    flex-direction:column;
    min-width: 30%;
    max-width:50%;
    justify-content: center;
    align-items: center;
  }
  `;

const Logo = styled.img`
  margin-top: 15px;
  position: relative;
  height: 350px;
  display: flex;
  align-self: center;
  @media(max-width: 700px){
    height: 280px;
    margin-top: 0;
  }
`;

const FooterText = styled.p`
      font-family: DesirasNonCommercial;
    color: #ffffff;
    font-size: 24px;
    text-align: center;
    letter-spacing:1.5px;
    word-wrap: break-word;
`;
const Children = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  @media(max-width: 1000px){
    flex-direction: column;
  }
`;