import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import { Menu, MenuItem, InputBase, Typography, IconButton, Toolbar, AppBar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";

import IconPadrao from "../../assets/HomePage/leme-rodape@72x.png";
import "./index.css";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paragraph: {
      color: "black",
      fontFamily: "Arial",
    },
    menuItem: {
      fontSize: 14,
      color: "crimson",
    },
    grow: {
      flex: 1,
      display: "flex",
      maxHeight: 70,
      flexDirection: "row",
    },
    appBar: {
      backgroundColor: "#3c7380",
      opacity: 0.9,
      width: "100vw",
      display: "flex",
      alignSelf: "flex-start"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      width: 285,
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    search: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.25),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.35),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `${theme.spacing(0.5)}px`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("lg")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  })
);

interface PropsNavBar {
  title: string;
  placeholder: string;
}

const Navbar: React.FC<PropsNavBar> = ({ title, placeholder }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem className={classes.menuItem}>
        <Link to="/" >
          Login
        </Link>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <Link to="/singup" >
          Sing up
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/" style={{ color: "#fff" }}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <img src={IconPadrao} style={{ height: 48 }} />
            </IconButton>
          </Link>
          <Typography id="teste" className={classes.title} variant="h6" noWrap>
            {title}
          </Typography>
          <div className={classes.search}>
            <InputBase
              placeholder={placeholder}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/">
              <Button variant="text" style={{ color: "white" }}>
                LOGIN
              </Button>
            </Link>
            <Link to="/singup">
              <Button
                variant="outlined"
                style={{
                  color: "white",
                  borderColor: "white",
                  display: "flex",
                }}
              >
                SingUP
              </Button>
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default Navbar;
