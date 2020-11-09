import React from "react";
import styled from "styled-components";
import Crew from "../../components/Crew";
import Navbar from "../../components/Navbar";

function Feed() {
  return (
    <Container>
      <Navbar></Navbar>
      <Content>
        <Filtros>FILTROS AQUI</Filtros>
        <MainFeed>
          <Crew />
          <Crew />
        </MainFeed>
        <Mural>MURAL TOP-USERS AQUI</Mural>
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
  height: 100vh;
  justify-content: space-between;
`;

const Filtros = styled.div`
  border: 1px solid green;
  flex: 1;
`;

const MainFeed = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
`;

const Mural = styled.div`
  margin-top: 80px;
  border: 1px solid black;
  flex: 1;
  max-height: 200px;
`;
