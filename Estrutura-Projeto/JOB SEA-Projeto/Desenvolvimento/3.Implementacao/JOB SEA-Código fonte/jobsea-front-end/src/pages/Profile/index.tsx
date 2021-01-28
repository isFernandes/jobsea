//commom imports
import React, { FormEvent, useState, useEffect } from "react";
import styled from "styled-components";
//imports material icons
import EditIcon from '@material-ui/icons/Edit';
import { Input, InputLabel, MenuItem, Select, Chip, Button } from "@material-ui/core";//extern archives
import "./index.css";
import avatarFake from "../../assets/Profile/defaultAvatar@72x.png";
import imgBackground from "../../assets/HomePage/fundo@72x.png";
import Navbar from "../../components/Navbar";
import InputDefault from "../../components/InputDefault";
import { getUser } from "../../services/userServices";
import { Link } from "react-router-dom";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { logout } from "../../rootReducer/ducks/auth";
import Message from "../../components/Message";

function Profile(props:any){
  const [user, setUser] = useState();
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

  const { message } = useSelector((state: RootStateOrAny) => state.message);
  
  useEffect(() => {
    const getProjects = async () => {
      const usuario: any = localStorage.getItem("user")
      const userId = usuario.id;
      const response = await getUser(userId)
      setUser(response.data);
    };
    
    getProjects();
  }, [user]);

  // const settingData = async ()=>{
  //   const loggedUser = await getUser(62);
  //   console.log(loggedUser)
  // }
  
  const editImage = () => {
    alert("touch for update a picture");
    // settingData()
  };

  // const saveForm = () => {
  //   alert("Dados Salvos");

  // };
  const techsFakeData = [
    "React JS",
    "React Native",
    "Node JS",
    "Git",
    "GitHub",
    "Docker",
    "Spring",
    "Java",
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
  ];
  
  const [techs, setTechs] = useState<string[]>([]);
  const [softs, setSofts] = useState<string[]>([]);
  const [bio, setBio] = useState("");
  
  const handleSelectTechs = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTechs(event.target.value as string[]);
  };

  const handleSelectSofts = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSofts(event.target.value as string[]);
  };

  const handleDataSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(bio);
  }
  const changeBio = (bio: string) => {
    setBio(bio);
  }

  const dispatch=useDispatch()
  
  const handleLogout = async () => {
    try {
      await dispatch(logout())
      props.history.push("/login");
      window.location.reload();
      
    } catch (error) {
      console.log(error)
    }
  }

  const loggedUser = useSelector((state: RootStateOrAny) => state.auth.user);
  
  return (
    <>
      <Navbar route="profile" placeholder="Busque um freelancer ..." title="Dashboard" >

        <Children>
          <Link to="/create-project">
            <Button variant="text" style={{ color: "white" }} >
              Criar projeto
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
        <ImageBackground src={imgBackground} />
        <Content onSubmit={handleDataSubmit}>
          <Header>
            <Avatar src={avatarFake} />
            <Icon className="icon" onClick={() => editImage()}>
              <EditIcon fontSize="small" />
            </Icon>
          </Header>
          {loggedUser ? (<UserData>{`${loggedUser.nome}, ${loggedUser.email}`}</UserData>) : (<UserData>
            nome_Usuario, email_Usuario
          </UserData>)}
          <div className="align ">
            <InputLabel id="label">Habilidades Extras</InputLabel>
            <Select
              labelId="demo-mutiple-chip-label"
              id="select"
              multiple
              value={softs}
              onChange={handleSelectSofts}
              input={<Input id="select-multiple-chip" />}
              renderValue={(selected) => (
                <div style={{ display: "flex", flexWrap: 'wrap' }}>
                  {(selected as string[]).map((value) => (
                    <Chip key={value} label={value} style={{ margin: "2px" }} />
                    ))}
                </div>
              )}
              MenuProps={MenuProps}
              >
              {SoftFakeData.map((soft) => (
                <MenuItem key={soft} value={soft} >
                  {soft}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div className="align">
            <InputLabel id="label">Habilidades Técnicas</InputLabel>
            <Select
              labelId="demo-mutiple-chip-label"
              id="select"
              multiple
              value={techs}
              onChange={handleSelectTechs}
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
              {techsFakeData.map((tech) => (
                <MenuItem key={tech} value={tech} >
                  {tech}
                </MenuItem>
              ))}
            </Select>
          </div>
          <InputDefault style={{ width: "450px", height: "80px" }} name="bio" placeholder="Bio" newValue={changeBio} />
          {message ? Message(message) : ""}
          <ButtonSave className="button">Salvar Dados</ButtonSave>
        </Content>
      </Container>

    </>
  );
};

export default Profile;

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
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self:center;
  width:100%;
  height: 100vh;
`;

const ImageBackground = styled.img`
  position: absolute;
  z-index: 0;
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  border-radius: 10px;
  max-width:40%;
  display: flex;
  background-color: #3c7380;
  opacity: 0.9;
  flex:1;
  align-self: center;
  padding: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-self:center;
  margin-top: 30px;
  @media (max-width: 700px){
    max-width: 80%;
    padding: 0 25px;
    
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: transparent;
  flex-direction: row;
  max-width: 400px;
  margin: 20px 0;
`;

const Avatar = styled.img`
  display: flex;
  align-self: center;
  border-radius: 400%;
  background-color: transparent;
  z-index: 1;
  border: black solid 1px;
  width: 120px;
  height: 120px;
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
  border: #d0d0d0 solid 2px;
`;

const ButtonSave = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  padding: 6px;
  background-color: #538f9c;
  opacity: 0.96;
  border: #9fb8bf solid 1.5px;
  border-radius: 12px;
  margin-top: 15px;
  font-family: DesirasNonCommercial;
  font-weight:bold;
  color: white;
`;

const UserData = styled.h3`
  font-family: DesirasNonCommercial;
  color: black;
  text-align: center;
  align-self:center;
  display:flex;
`;
