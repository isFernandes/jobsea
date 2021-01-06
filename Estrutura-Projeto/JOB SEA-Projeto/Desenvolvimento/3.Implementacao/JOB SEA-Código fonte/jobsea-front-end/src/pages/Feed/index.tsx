import React from "react";
import styled from "styled-components";
import Crew from "../../components/Crew";
import Navbar from '../../components/Navbar';

function Feed() {
  return (
    <Container>
      <Navbar placeholder="Busque um freelancer ..." title="JOB SEA" />
      <Content>
        <Filtros></Filtros>
        <MainFeed>
          <Crew />
          <Crew />
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
  background: white;
`;


const Filtros = styled.div`
  background-color: green;
  flex: 1;
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
