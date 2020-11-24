//commom imports
import React from "react";
import styled from "styled-components";
//imports material icons
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
//extern archives
import "./index.css";
import avatarFake from "../../assets/ProfileScreen.png";
import Navbar from "../../components/Navbar";

const Profile: React.FC = () => {
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

  const editImage = () => {
    alert("click funcionou");
  };

  const saveForm = () => {
    alert("Dados Salvos");
  };
  const techsFakeData = [
    "React JS",
    "React Native",
    "Node JS",
    "Git",
    "GitHub",
    "Docker",
    "Spring",
    "Odeio Java",
    "C#",
    "Python",
  ];

  const SoftFakeData = [
    "Trabalho em equipe",
    "Terra redonda",
    "Desenvolto",
    "Lider",
    "Pacifico",
    "Tranquilo",
    "Calmo",
    "Odeia Java",
    "Ama typescript",
    "Jogador de r6",
  ];

  const [techs, setTechs] = React.useState<string[]>([]);
  const [softs, setSofts] = React.useState<string[]>([]);

  const handleSelectTechs = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTechs(event.target.value as string[]);
  };

  const handleSelectSofts = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSofts(event.target.value as string[]);
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Content>
          <Header>
            <Avatar src={avatarFake} />
            <Icon className="icon" onClick={() => editImage()}>
              <EditRoundedIcon fontSize="large" />
            </Icon>
          </Header>
          <UserData>
            `$nomeUsuario, $equipesparticipantes, $techsConhecidas`
          </UserData>
          <TextField id="bio-text" label="bio" variant="outlined" />

          <div className="align">
            <InputLabel id="label">SoftSkills</InputLabel>
            <Select
              labelId="label"
              className="select"
              multiple
              value={softs}
              onChange={handleSelectSofts}
              input={<Input />}
              renderValue={(selected) => (selected as string[]).join(", ")}
              MenuProps={MenuProps}
            >
              {SoftFakeData.map((soft) => (
                <MenuItem key={soft} value={soft}>
                  <Checkbox checked={softs.indexOf(soft) > -1} />
                  <ListItemText primary={soft} />
                </MenuItem>
              ))}
            </Select>
          </div>

          <div className="align">
            <InputLabel id="label">Habilidades Técnicas</InputLabel>
            <Select
              labelId="label"
              className="select"
              multiple
              value={techs}
              onChange={handleSelectTechs}
              input={<Input />}
              renderValue={(selected) => (selected as string[]).join(", ")}
              MenuProps={MenuProps}
            >
              {techsFakeData.map((tech) => (
                <MenuItem key={tech} value={tech}>
                  <Checkbox checked={techs.indexOf(tech) > -1} />
                  <ListItemText primary={tech} />
                </MenuItem>
              ))}
            </Select>
          </div>
          <Button onClick={saveForm} className="button">
            Ta aqui o butao
          </Button>
        </Content>
      </Container>
    </div>
  );
};

export default Profile;

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 15px;
  background-color: #d0d0d0;
  opacity: 0.9;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: transparent;
  flex-direction: row;
  max-width: 400px;
  max-heigh: 400px;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  display: flex;
  align-self: center;
  border-radius: 400%;
  background-color: blue;
  z-index: 1;
  border: black solid 1px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  padding: 12px;
  z-index: 2;
  border-radius: 400%;
  margin-bottom: -15px;
  margin-left: -55px;
  background-color: white;
  border: #d0d0d0 solid 4px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  padding: 6px;
  background-color: #a8a0a0;
  opacity: 0.96;
  border: rgb(112, 117, 138) solid 2px;
  border-radius: 12px;
  margin-top: 15px;
`;

const UserData = styled.h4``;
