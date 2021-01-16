import React, { useState } from "react";
import { IconButton, Menu, InputBase } from "@material-ui/core";
// import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";

import IconPadrao from "../../assets/HomePage/leme-rodape@72x.png";
import "./index.css";

interface PropsNavBar {
  title: string;
  placeholder: string;
  route: string;
}

const Navbar: React.FC<PropsNavBar> = ({ title, placeholder, route, children }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false)
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true)
  };

  const ITEM_HEIGHT = 48;

  return (
    <Container>
      <Section style={{ display: "flex", flex: 0.7 }}>
        <Title>
          <TextPage href={`/${route}`}>
            <ImgLogo src={IconPadrao} />
          </TextPage>
          <TitleNavbar href="/">{title}</TitleNavbar>
        </Title>
      </Section>
      <Section>
        <Pages>
          <SearchInput>
            <InputBase
              placeholder={placeholder}
              inputProps={{ "aria-label": "search" }}
            />
            <div >
              <SearchIcon style={{ color: "#C0C0C0" }} />
            </div>
          </SearchInput>
          <Options >
            {children}
          </Options>
          <ResponsiveMenu > <>
            <IconButton
              style={{
                display: "flex",
                alignSelf: "flex-end",
                border: "10px",
                borderColor: "#fff",
              }}
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon style={{ color: "#fff" }} fontSize="large" />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#9fb8bf",
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "15ch",
                },
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  flexDirection: "column",
                  lineHeight: "1.75",
                }}
              >
                {children}
              </div>
            </Menu>
          </></ResponsiveMenu>
        </Pages>
      </Section>
    </Container>
  );
};

export default Navbar;

export const Container = styled.header`
  background-color: #3c7380;
  margin: 0 0 15px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0;
  width: 100%;
  max-height: 70px;
  position:fixed;
  align-self: flex-start;
  z-index: 5;
  opacity: .9;
  @media (max-width: 360px){
    width: 360px;
  }
`;

export const Title = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  align-self: center;
`;

export const ImgLogo = styled.img`
  width:${(props) => props.width};
  height: ${(props) => props.height};
  margin-right:10px;
  @media(max-width: 600px){
  }
`;

export const Pages = styled.div`
  display: flex;
  flex-direction: row;
  color: #ffff;
  justify-content: space-evenly;
  width: 80%;
  text-align: center;
  font-size:12px;
  font-family: 'Poppins', Verdana;
  align-items: center;
  @media (max-width: 900px){
    justify-content: flex-end;
  }
`;

export const TextPage = styled.a`
  color: #fff;
  text-align: center;
  font-size:12px;
  font-family: 'Poppins', Verdana;
  text-decoration: none;
  letter-spacing: 0.05em;
  @media (max-width: 900px){
    margin: 0 5px;
  }
`;
export const TitleNavbar = styled.a`
  color: #fff;
  text-align: center;
  font-size:36px;
  font-family: PerkyAreaDemoRegular, Verdana;
  text-decoration: none;
  letter-spacing: 0.07em;
  @media(max-width: 900px){
    display: none;
  } 
`;

export const ButtonSignUp = styled.div`
  border: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 90px;
  height: 30px;
  width: 158px;
  background-color: #2262fa;
  color: #fff;
  font-family: "Poppins", Verdana;
  box-shadow: 0px 3px #00e7f7;
  :hover {
    opacity: 0.87;
  }
`;

export const Section = styled.section`
  display: flex;
  flex: 1;
  justify-content: space-around;
`;

export const Options = styled.nav`
 display: flex;
  flex-direction: row;
  color: #ffff;
  flex:1;
  text-align: center;
  font-size:12px;
  max-width: 60%;
  font-family: 'Poppins', Verdana;
  align-items: center;
  @media (max-width: 1001px){
    display: none;
    width:100%;
  }
`;
const SearchInput = styled.div`
  display: flex;
  background-color: #fff; 
  justify-content: center; 
  align-items: center;
  border-radius: 6px;
  padding:5px;
`;


export const ResponsiveMenu = styled.nav`
display: flex;
  @media (min-width: 1000px){
    display: none;
    align-self: flex-end;
    width:100%;
  }
`;
