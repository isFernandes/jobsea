import React from "react";
import styled from "styled-components";
import Crew from "../../components/Crew";

function Feed() {
  return (
    <Container>
      <Navbar>HEADER</Navbar>
      <Content>
        <Filtros></Filtros>
        <MainFeed>
          <Crew />
          <Crew />
          <Crew />
          <Crew />
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
  height: 100vh;
`;

const Navbar = styled.header`
  background-color: blue;
  height: 50px;
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
