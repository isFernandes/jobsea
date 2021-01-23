/* eslint-disable react-hooks/exhaustive-deps */
import React, { } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Navbar from '../../components/Navbar';


interface RootState {
  project: any;
  selectedProject: object;
}
function ProjectSub() {
  const selectedProject = useSelector((state: RootState) => state.project.selectedProject);

  return (
    <Container>
      <Navbar route="feed" placeholder="Busque um freelancer ..." title="JOB SEA" />
      <Content>
        {console.log(selectedProject)}
        <MainFeed>
          <InfoCard>
            <Title>
              {selectedProject !== null ? selectedProject.nome : "Nome do Projeto"}
            </Title>
            <MainInfo >
              {selectedProject !== null ? selectedProject.descricao : "Descricao do Projeto"}
            </MainInfo>
            <DetailsInfo >
              {selectedProject !== null ? selectedProject.tagTecnicas : "Técnicas do Projeto"}
            </DetailsInfo>
            <OwnerInfo >
              Cliente - {selectedProject !== null ? selectedProject.tempoEstimado : "Tempo Estimado"}
            </OwnerInfo>
          </InfoCard>
        </MainFeed>
        <Mural></Mural>
      </Content>
    </Container>
  );
}

export default ProjectSub;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height:100%;
  margin-top:75px;
  background: #eaf1f3;
`;

const MainFeed = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-self:center;
  justify-content:flex-start;
  align-items:flex-end;
  background-color: transparent;
  height: 90%;
`;

const Mural = styled.div`
  margin-top:80px;
  background-color: black;
  flex: 1;
  max-height: 200px;
  max-width: 300px;
`;
const InfoCard = styled.div`
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  justify-content: space-around;
  border: 0.5px solid #d2dbdd;
  box-shadow: 3px 4px 4px #c7c4c4;
  padding:0;
  height: 75%;
  width: 600px;
  margin-right:40px;
  align-self: flex-end;
  border-radius: 3px;
  padding: 0 0 0 10px;
`;

const Title = styled.h1`
    display: flex;
    font-weight:bold;
    align-self: center;
    font-family: DesirasNonCommercial;
    color: #3c7380;
    letter-spacing: 1.10px;
`;

const MainInfo = styled.p`
    color: #3c7380;
    font-family: 'Poppins';
    font-size: 16px;
    margin-left: 20px;
    display: flex;
    align-self: flex-start;
    letter-spacing: 1.25px;
    text-align:justify;
    
    font-weight:700;
    `;
const DetailsInfo = styled.p`
    color: #3c7380;
    font-family: 'Poppins';
    font-size: 16px;
    margin-left: 20px;
    display: flex;
    align-self: flex-start;
    letter-spacing: 1.25px;
    font-weight:700;
    `;
const OwnerInfo = styled.p`
    color: #3c7380;
    font-family: 'Poppins';
    font-size: 16px;
    margin-left: 20px;
    display: flex;
    align-self: flex-start;
    letter-spacing: 1.25px;
    font-weight:700;
`;