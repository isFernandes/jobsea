import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";

import { setProject } from "../../rootReducer/ducks/project";

export interface Crew {
  _id: string;
  nome: string;
  descricao: string;
  tagTecnicas: string;
  project_owner: any;
  projects_subscribe: any;
}
interface CrewsProp {
  crew: Crew;
}


export const CrewCard: React.FC<CrewsProp> = ({ crew }) => {
  const dispatch = useDispatch();
  const handleClick = async (id: string) => {

    await dispatch(setProject(id));

  }

  return (
    <Link to="/sub-project" style={{ alignSelf: "center" }}>
      <Container onClick={() => handleClick(crew._id)}>
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
            Cliente - {crew.project_owner[0].nome}
          </OwnerInfo>
        </Content>
      </Container>
    </Link>
  );
}

export const SubCrewCardUser: React.FC<CrewsProp> = ({ crew }) => {
  const dispatch = useDispatch();
  const handleClick = async (id: string) => {

    await dispatch(setProject(id));

  }

  return (
    <Link to="/sub-project" style={{ alignSelf: "center" }}>
      <Container onClick={() => handleClick(crew._id)}>
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
        </Content>
      </Container>
    </Link>
  );
}


export const CrewCardUser: React.FC<CrewsProp> = ({ crew }) => {
  const dispatch = useDispatch();
  const handleClick = async (id: string) => {

    await dispatch(setProject(id));

  }

  return (
    <Container onClick={() => handleClick(crew._id)}>
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
      </Content>
    </Container>
  );
}


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
