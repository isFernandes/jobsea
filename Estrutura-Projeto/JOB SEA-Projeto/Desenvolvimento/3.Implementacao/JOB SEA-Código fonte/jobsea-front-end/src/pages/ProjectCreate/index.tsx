import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import { InputLabel, Select, MenuItem, Input, Chip } from "@material-ui/core";

import "./index.css";
import imgBack from "../../assets/Signup/bg mar barco_Prancheta 1.png";
import Navbar from "../../components/Navbar";
import InputDefault from "../../components/InputDefault";
import { createProject } from "../../services/projectServices";

function ProjectCreate() {
  const [nome, setNome] = useState("");
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [descricao, setDescricao] = useState("");
  const [tempoEstimado, setTempoEstimado] = useState("");
  const [verba, setVerba] = useState("");

  const handleSelectSelectedTechs = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedTechs(event.target.value as string[]);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const selectedTechsFakeData = [
    "React JS",
    " React Native",
    " Node JS",
    " Git",
    " GitHub",
    " Docker",
    " Spring",
    " Odeio Java",
    " C#",
    " Python",
  ];

  const changeName = (nome: string) => {
    setNome(nome);
  }

  const changeDescricao = (value: string) => {
    setDescricao(value);
  }
  const changeVerba = (value: string) => {
    setVerba(value);
    console.log(verba)
  }
  const changeTime = (value: string) => {
    setTempoEstimado(value);
  }
  const criaProjeto = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const techs = selectedTechs.toString();
      const newProject = {
        nome,
        descricao,
        tempoEstimado,
        // verba, 
        techs
      }

      console.log(techs, selectedTechs)
      const createdProject = await createProject(newProject);
      console.log(createdProject);
      setDescricao("")
      setNome("")
      setTempoEstimado("")
      setVerba("")
      return <Redirect to="/feed" />
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar route="create-project" placeholder="Busque um freelancer ..." title="PROJETO" />
      <Container>
        <ImageBackground src={imgBack} />
        <Content>
          {/* <TitleSingup>CRIE SEU PROJETO</TitleSingup> */}
          <Form onSubmit={criaProjeto} >
            <InputDefault style={{ flex: 1, minWidth: "90%" }} name="nome" placeholder="Nome do Projeto" newValue={changeName} />
            <div className="align" style={{ minWidth: "90%" }}>
              <InputLabel id="label">CARACTERISTICAS TECNICAS</InputLabel>
              <Select
                labelId="demo-mutiple-chip-label"
                id="select"
                multiple
                value={selectedTechs}
                onChange={handleSelectSelectedTechs}
                input={<Input id="select-multiple-chip" />}
                renderValue={(selected) => (
                  <div style={{ display: "flex", flexWrap: 'wrap' }}>
                    {(selected as string[]).map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </div>
                )}
                MenuProps={MenuProps}
              >
                {selectedTechsFakeData.map((tech) => (
                  <MenuItem key={tech} value={tech} >
                    {tech}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <InputDefault style={{ flex: 1, minWidth: "90%", height: "80px" }} name="sobrenome" placeholder="Descricao" newValue={changeDescricao} />
            <InputDefault style={{ flex: 1, minWidth: "90%" }} name="time" placeholder="Tempo estimado (em dias)" newValue={changeTime} />
            <InputDefault style={{ flex: 1, minWidth: "90%" }} name="senha" placeholder="Valor disponivel" newValue={changeVerba} />

            <ButtonArea>
              <button
                className="back-button"
                color="primary"
              >
                <Link className="linking-text" to="/">
                  Voltar
             </Link>
              </button>
              <button
                className="done-button"
                color="primary"
                type="submit"
                onClick={criaProjeto}
                style={{ color: "#3c7380", fontWeight: "bold" }}
              >
                Pronto
                </button>
            </ButtonArea>
          </Form>
        </Content>
      </Container>
    </>
  );
}

export default ProjectCreate;

const Form = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  z-index: 1;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  min-height: 100%;
  z-index: 1;
`;

const Content = styled.div`
  max-height:600px;
  margin-top: 80px;
  flex: 5;
  flex-direction: column;
  display: flex;
  align-items: center;
  background-color: #3c7380;
  z-index: 1;
  opacity: 0.90;
  padding: .10rem  10px 0 10px;
  border-radius: 10px;
  @media(min-width: 680px){
    width:565px;
  }
`;

const ImageBackground = styled.img`
  position: absolute;
  z-index: 0;
  height: 100vh;
  width: 100vw;
  object-fit: cover;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
`;
