/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CrewCard, { Crew } from "../../components/Crew";
import Navbar from '../../components/Navbar';
import { getAllProject } from "../../services/projectServices";

function Feed() {
  const [crews, setCrews] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const response = await getAllProject();

      setCrews(response.data);
    };

    getProjects();
  }, []);

  return (
    <Container>
      <Navbar route="feed" placeholder="Busque um freelancer ..." title="JOB SEA" />
      <Content>
        <Filtros></Filtros>
        <MainFeed>
          {crews.map((crew: Crew) => (
            <CrewCard key={crew.id} crew={crew} />
          ))}
        </MainFeed>
        <Mural></Mural>
      </Content>
    </Container>
  );
}

export default Feed;

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


const Filtros = styled.div`
  flex: 1;
  border: 0.5px solid #d2dbdd;
  box-shadow: 3px 4px 4px #c7c4c4;
`;

const MainFeed = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
`;

const Mural = styled.div`
  margin-top:80px;
  background-color: black;
  flex: 1;
  max-height: 200px;
`;
