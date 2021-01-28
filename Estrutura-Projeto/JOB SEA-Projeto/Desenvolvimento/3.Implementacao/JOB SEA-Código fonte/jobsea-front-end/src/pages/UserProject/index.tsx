/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Crew, CrewCardUser, SubCrewCardUser } from "../../components/Crew";
import Navbar from '../../components/Navbar';
import { getProjectsFromUser, getSubsFromUser } from "../../services/projectServices";
import { logout } from "../../rootReducer/ducks/auth";
import { Link } from "react-router-dom";
import Message from "../../components/Message";

function UserProject(props: any) {
  const dispatch = useDispatch();
  const [crews, setCrews] = useState([]);
  const [subProject, setSubProjects] = useState([]);

  const { user } = useSelector((state: RootStateOrAny) => state.auth);

  useEffect(() => {
    const getProjects = async () => {
      const response = await getProjectsFromUser(user.id);

      setCrews(response.data);
    };

    const getSubProjectForUser = async () => {
      const response:any = await getSubsFromUser(user.id);
      console.log(response)
      setSubProjects(response.data[0].projects_subscribe);
    };

    getProjects();
    getSubProjectForUser();
  }, []);

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
      <Navbar route="feed" placeholder="Busque um freelancer ..." title="JOB SEA">
        <Children>
          
          <Link to="/create-project">
            <Button variant="text" style={{ color: "white" }} >
              Criar projeto
          </Button>
          </Link>
          <Link to="/profile">
            <Button variant="text" style={{ color: "white" }} >
              Perfil
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
          <Title>Projetos Criados:</Title>
          {crews ? 
            crews.map((crew: Crew) => (
              <CrewCardUser key={crew._id} crew={crew} />
            ))
           : Message("Voce ainda não possui nenhum projeto")}
           <Title>Projetos Inscritos:</Title>
           {console.log(subProject)}
           {subProject ? 
            subProject.map((crew: Crew) => (
              <SubCrewCardUser key={crew._id} crew={crew} />
            ))
           : Message("Voce ainda não esta inscrito em nenhum projeto")} 

        </MainFeed>
      </Content>
    </Container>
  );
}

export default UserProject;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Title = styled.h2`
    display: flex;
    font-weight:bold;
    align-self: center;
    font-family: DesirasNonCommercial;
    color: #3c7380;
    letter-spacing: 1.10px;
    margin-top:45px;
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
  flex: 2;
  flex-direction: column;
  `;

// const Filtros = styled.div`
//     flex: 1;
//     border: 0.5px solid #d2dbdd;
//     box-shadow: 3px 4px 4px #c7c4c4;
//     max-width: 300px;
//   `;

// const Mural = styled.div`
//   margin-top:80px;
//   background-color: black;
//   flex: 1;
//   max-height: 200px;
// `;
