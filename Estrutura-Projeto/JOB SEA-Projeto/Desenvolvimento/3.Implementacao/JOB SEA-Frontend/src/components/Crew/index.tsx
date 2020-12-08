import React from "react";
import styled from "styled-components";

import "./index.css";

const Crew: React.FC = () => {
  return (
    <Container>
      <CrewRanting>81</CrewRanting>
      <CrewInfo>
          informacoes em geral disponiveis aqui
          <br></br>
          ababababbababa
      </CrewInfo>
      <CrewValue>R$ 2000</CrewValue>
    </Container>
  );
};

export default Crew;

const Container = styled.div`
  margin-top: 25px;
  background-color: #c1cfbe;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex:1;
  border: 1px solid #8ca686;
  border-radius: 10px;
  padding:0;
`;

const CrewRanting = styled.div`
  display: flex;
  flex:0.2;
  align-items: center;
  justify-content: center;
  background-color: #8ca686;
  border-radius: 700%;
  padding: 15px;
`;

const CrewInfo = styled.div`
padding: 6px 6px 6px 10px; 
  display: flex;
  align-self: center;
  flex-wrap: wrap;
  flex: 3;
`;

const CrewValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
