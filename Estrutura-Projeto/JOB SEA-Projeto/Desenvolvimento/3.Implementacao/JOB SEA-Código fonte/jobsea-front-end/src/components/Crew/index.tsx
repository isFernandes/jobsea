import React from "react";
import styled from "styled-components";
import {getProject} from "../../services/projectServices"

export interface Crew{
  id:number;
  nome: string;
  descricao: string;
  tagTecnicas: string;
  tempoEstimado:string;
}
interface CrewsProp{
  crew: Crew;
}

const handleClick = async (id: number)=>{
  const projeto = await getProject(id);
  console.log(projeto);
  console.log(`id: ${id}`);
}

const CrewCard:React.FC<CrewsProp> = ({crew})=> {
  return (
    <Container onClick={()=>handleClick(crew.id)}>
      <Content>
        <Title>
          {crew.nome}
        </Title>
        <MainInfo >
          {crew.descricao}
        </MainInfo>
        <DetailsInfo >
          {crew.tagTecnicas} 
        </DetailsInfo>
        <OwnerInfo >
          Cliente - {crew.tempoEstimado}
        </OwnerInfo>
      </Content>
    </Container>
  );
}

export default CrewCard;

const Container = styled.div`
  margin-top:25px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border: 0.5px solid #d2dbdd;
  box-shadow: 3px 4px 4px #c7c4c4;
  padding:0;
  height: 200px;
  width: 600px;
  align-self: center;
  border-radius: 3px;
  padding: 0 0 0 10px;
`;
const Content = styled.div`
padding:0 15px;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  border: 1px solid inherit;
  flex:1;
  flex-direction:column;
  align-self:center;
`;

const Title = styled.h3`
    display: flex;
    font-weight:bold;
    align-self: flex-start;
    font-family: DesirasNonCommercial;
    color: #3c7380;
    letter-spacing: 1.10px;
`;

const MainInfo = styled.p`
    color: black;
    font-family: DesirasNonCommercial;
    font-size: 12px;
    display: flex;
    align-self: flex-start;
    letter-spacing: 1.25px;
    text-align:justify;
    `;
const DetailsInfo = styled.p`
    color: black;
    font-family: DesirasNonCommercial;
    font-size: 12px;
    display: flex;
    align-self: flex-start;
    letter-spacing: 1.25px;
    `;
const OwnerInfo = styled.p`
    color: black;
    font-family: DesirasNonCommercial;
    font-size: 12px;
    display: flex;
    align-self: flex-start;
    letter-spacing: 1.25px;
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
