/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import CrewCard, { Crew } from "../../components/Crew";
import Navbar from '../../components/Navbar';
import { getAllProject } from "../../services/projectServices";
import { logout } from "../../rootReducer/ducks/auth";
import { Link } from "react-router-dom";

function Feed(props: any) {
  const dispatch = useDispatch();
  const [crews, setCrews] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const response = await getAllProject();

      setCrews(response.data);
    };

    getProjects();
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
          <Button variant="text" style={{ color: "white" }} onClick={() => {
            handleLogout();
          }}>
            Log Out
          </Button>
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
        </Children>
      </Navbar>
      <Content>
        {/* <Filtros></Filtros> */}
        <MainFeed>
          {crews.map((crew: Crew) => (
            <CrewCard key={crew._id} crew={crew} />
          ))}
        </MainFeed>
      </Content>
    </Container>
  );
}

export default Feed;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Children = styled.form`
  align-self:center;
  display: flex;
  flex: 1;
  justify-content: center;
  max-width: 300px;
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
