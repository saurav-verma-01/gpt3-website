import React from "react";
import styles from "./navbar.module.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const NavBar = () => {
  return <nav className{styles.navbar}>
    <div className{styles.navbarLinks}>
      <div className{styles.logo}>
        <img src={logo} alt="logo" />
      </div>
    </div>
  </nav>
};

export default NavBar;
