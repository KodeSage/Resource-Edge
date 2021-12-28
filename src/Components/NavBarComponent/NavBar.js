import React, { useState } from "react";
import logo from "../Assets/desktoplogo.svg";
import "./NavBar.css";
import Container from "../CommonStyles/Container";
import {ReactComponent as BurgerMenu } from '../Assets/menu.svg'
import { ReactComponent as CloseMenu } from "../Assets/x.svg";
import { NavLink } from "react-router-dom";
const NavBar = () => {
   const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  
  const link = "#";

  return (
    <Container className="header">
      <div className="navLogo">
        <img src={logo} alt="navlogo" />
      </div>
      <nav className={click ? "navLinks active" : "navLinks"}>
        <div className="links">
          <a href={link}>Features</a>
          <a href={link}>About</a>
        </div>
        <div className="buttons">
          <button className="sign-up">SignUp</button>
          <NavLink to="/sign-in">
            <button className="sign-in">SignIn</button>
          </NavLink>
        </div>
      </nav>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <BurgerMenu className="menu-icon" />
        )}
      </div>
    </Container>
  );
};


export default NavBar;
