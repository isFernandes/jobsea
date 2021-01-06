import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


import "./index.css";
import Navbar from "../../components/Navbar";
import imgBackground from "../../assets/HomePage/fundo@72x.png";
import logotipeMain from "../../assets/HomePage/logotipo-caravela@72x.png";
import lemeRodape from "../../assets/HomePage/leme-rodape@72x.png";

function Landing() {
  return (
    <Container>
      <ImageBackground src={imgBackground} />
      <Navbar placeholder="Busque um freelancer ..." title="J O B S E A" />
      <LoginField>
        <Logo src={logotipeMain} />
      <ButtonArea>
        <button className="create-job" >
          <Link style={{color: '#fff'}} className="linking-button" to="/esqueceu-senha">
            PUBLIQUE UM JOB
          </Link>
        </button>
        
        <button
          className="search-job"
        >
          <Link style={{color:'#3c7380'}} className="linking-button" to="/feed">
            ENCONTRE UM JOB
          </Link>
        </button>
      </ButtonArea>
      <p>ENCONTRE SEU JOB NESSE MAR DE OPORTUNIDADES . . .</p>
      <Leme className="leme-icon" src={lemeRodape} />
      </LoginField>
      
    </Container>
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

 const Leme = styled.img`
   width: 60px;
   height: 60px;
   display: flex;
   align-self: center;
   margin-bottom: 10px;
 `;

const LoginField = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  z-index: 1;
`;

const ButtonArea = styled.div`
  margin: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  align-self: center;
  padding: 5px;
  flex:1;
  @media(max-width: 700px){
    flex-direction:column;
    width: 40%;
    justify-content: center;
    align-items: center;
  }
`;

const Logo = styled.img`
  margin-top: 15px;
  width: 379px;
  height: 350px;
  display: flex;
  align-self: center;
`;
