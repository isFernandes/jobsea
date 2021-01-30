import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { InputLabel, Select, MenuItem, Input, Chip, Button } from "@material-ui/core";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import "./index.css";
import imgBack from "../../assets/Signup/bg mar barco_Prancheta 1.png";
import Navbar from "../../components/Navbar";
import InputDefault from "../../components/InputDefault";
import { logout } from "../../rootReducer/ducks/auth";
import Message from "../../components/Message";
import { projectCreate } from "../../rootReducer/ducks/project";

function ProjectCreate(props:any) {
  const dispatch=useDispatch()
  const [nome, setNome] = useState("");
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [descricao, setDescricao] = useState("");
  const [tempoEstimado, setTempoEstimado] = useState("");
  const [verba, setVerba] = useState(0);

  const user = useSelector((state: RootStateOrAny) => state.auth.user);
  const { message } = useSelector((state: RootStateOrAny) => state.message);
  
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
    " Java",
    " C#",
    " Python",
  ];

  const changeName = (nome: string) => {
    setNome(nome);
  }

  const changeDescricao = (value: string) => {
    setDescricao(value);
  }
  const changeVerba = (value: any) => {
    setVerba(value);
  }
  const changeTime = (value: string) => {
    setTempoEstimado(value);
  }
  const criaProjeto = async (e: FormEvent) => {
    e.preventDefault();
    const tagTecnicas = selectedTechs.toString();
    const newProject = {
      nome,
      descricao,
      tempoEstimado,
      verba,
      tagTecnicas
    }
    try {

      const ownerId = user.id;
      dispatch(projectCreate(ownerId, newProject))
      setDescricao("")
      setNome("")
      setTempoEstimado("")
      setVerba(0)
    } catch (error) {
      console.log(error);
    }
  }
  
  
  
  
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
    <>
      <Navbar route="feed" placeholder="Busque um freelancer ..." title="PROJETO">
        
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
      <Container>
        <ImageBackground src={imgBack} />
        <Content>
          <Form onSubmit={criaProjeto} >
            <InputDefault style={{ flex: 1, minWidth: "90%" }} name="nome" value={nome} placeholder="Nome do Projeto" newValue={changeName} />
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
            <InputDefault 
              style={{ flex: 1, minWidth: "90%", height: "80px" }} 
              value={descricao} 
              name="descricao" 
              placeholder="Descricao" 
              newValue={changeDescricao} 
              />
            <InputDefault 
              style={{ flex: 1, minWidth: "90%" }}
              name="time"
              placeholder="Tempo estimado (em dias)" 
              newValue={changeTime} 
              value={tempoEstimado} />
            <InputDefault 
              style={{ flex: 1, minWidth: "90%" }}
              name="verba"
              type="number"
              placeholder="Valor disponivel" 
              newValue={changeVerba} 
              value={verba} />

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
            {message ? Message(message) : ""}
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
