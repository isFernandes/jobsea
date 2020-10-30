import React from "react";
import styled from "styled-components";
import './index.css';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

function SingUp() {
  return (
    <Container>
      <Form action="POST" method="post">
        SINGUP
      </Form>
    </Container>
  );
}

export default SingUp;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  margin: 0 10rem 0 10rem;
`;
