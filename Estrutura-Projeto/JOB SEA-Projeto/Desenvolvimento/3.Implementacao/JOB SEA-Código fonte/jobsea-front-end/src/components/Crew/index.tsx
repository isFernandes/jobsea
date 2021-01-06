import React from "react";
import styled from "styled-components";

import "./index.css";

const Crew: React.FC = () => {
  return (
    <Container>
      <h3>Titulo do Projeto</h3>
      <p>informacoes do projeto</p>
    </Container>
  );
};

export default Crew;

const Container = styled.div`
  margin-top: 25px;
  background-color: #9fb8bf;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid inherit;
  padding:0;
  height: 200px;
`;

// const CrewRanting = styled.div`
//   display: flex;
//   flex:0.2;
//   align-items: center;
//   justify-content: center;
//   background-color: #8ca686;
//   border-radius: 700%;
//   padding: 15px;
// `;

// const CrewInfo = styled.div`
// padding: 6px 6px 6px 10px; 
//   display: flex;
//   align-self: center;
//   flex-wrap: wrap;
//   flex: 3;
// `;

// const CrewValue = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex: 1;
// `;
