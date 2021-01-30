/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import styled from "styled-components";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import Navbar from '../../components/Navbar';
import ButtonOutlined from "../../components/ButtonOutlined"
import ButtonContained from "../../components/ButtonContained"
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { logout } from "../../rootReducer/ducks/auth";
import Message from "../../components/Message";
import { subscribeProject } from "../../rootReducer/ducks/user";

function ProjectSub(props: any) {
  const selectedProject = useSelector((state: RootStateOrAny) => state.project.selectedProject);
  const { message } = useSelector((state: RootStateOrAny) => state.message);
  
  const user = useSelector((state: RootStateOrAny) => state.auth.user);

  const handleSubmit = async () => {
    // e.preventDefault();
    try {
      console.log(user.id, selectedProject.project._id)
      dispatch(subscribeProject(user.id, selectedProject.project._id));
    } catch (error) {
      console.log(error)
    }
  }


  const dispatch = useDispatch()

  const handleLogout = async () => {
    try {
      await dispatch(logout())
      props.history.push("/login");
      window.location.reload();

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Navbar route="feed" placeholder="Busque um freelancer ..." title="JOB SEA" >

        <Children>
          <Link to="/create-project">
            <Button variant="text" style={{ color: "white" }} >
              Criar projeto
          </Button>
          </Link>
          <Link to="/user-projects">
            <Button variant="text" style={{ color: "white" }} >
              Seus projetos
            </Button>
          </Link>
          <Button variant="text" style={{ color: "white" }} onClick={() => {
            handleLogout();
          }}>
            Log Out
          </Button>
        </Children>
      </Navbar>
      <Content>
        <MainFeed>
          <InfoCard onSubmit={handleSubmit}>
            <Title>
              {selectedProject !== null ? selectedProject.project.nome : "Nome do Projeto"}
            </Title>
            <MainInfo >
              {selectedProject !== null ? selectedProject.project.descricao : "Descricao do Projeto"}
            </MainInfo>
            <DetailsInfo >
              {selectedProject !== null ? selectedProject.project.tagTecnicas : "Técnicas do Projeto"}
            </DetailsInfo>
            <OwnerInfo >
              Cliente - {selectedProject !== null ? selectedProject.owner : "Owner do Projeto"}
            </OwnerInfo>
            <ButtonsArea>
              <ButtonOutlined text="Cancelar" routeParams="/feed" type="text" />
              <ButtonContained onClick={()=>(
                handleSubmit()
                )} text="Candidatar-se" type="submit" />
            </ButtonsArea>
          </InfoCard>
          {message ? Message(message) : ""}
        </MainFeed>
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
  align-items:center;
  background-color: transparent;
  height: 90%;
`;

const Children = styled.form`
  align-self:flex-end;
  display: flex;
  flex: 1;
  justify-content: space-between;
  min-width:100%;
  @media(max-width: 1000px){
    flex-direction: column;
  }
`;

const ButtonsArea = styled.div`
  margin:0 15px 0 0;
  background-color: transparent;
  display:flex;
  flex: 1;
  justify-content:space-between;
  max-height: 40px;
  width: 80%;
  align-self: flex-end;
`;

const InfoCard = styled.form`
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  justify-content: space-around;
  border: 0.5px solid #d2dbdd;
  box-shadow: 3px 4px 4px #c7c4c4;
  padding:0;
  min-height: 70%;
  max-height: 85%;
  width: 600px;
  margin-right:40px;
  align-self: center;
  border-radius: 3px;
  padding: 0 10px 0 10px;
  z-index:0;
  flex:1;
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
    margin-bottom:15px;
`;