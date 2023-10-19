import { useState } from "react";
import styles from "./navbar.module.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const NavBar = () => {
  const [toggleOpen, setToggleOpen] = useState(false);
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src={logo} alt="gpt3 logo" width={62} height={16} />
      </div>
      <ul className={styles.nav__menu}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#wgpt3">What is GPT?</a>
        </li>
        <li>
          <a href="#possibility">Open AI</a>
        </li>
        <li>
          <a href="#features">Case Studies</a>
        </li>
        <li>
          <a href="#blog">Library</a>
        </li>
      </ul>
      <div className={styles.sign}>
        <a className={styles.signin} href="#sign-in">
          Sign in
        </a>
        <a className={styles.signup} href="#sign-up">
          Sign up
        </a>
      </div>
      <div className={styles.btns}>
        {toggleOpen ? (
          <button onClick={() => setToggleOpen(false)}>
            <RiCloseLine />
          </button>
        ) : (
          <button onClick={() => setToggleOpen(true)}>
            <RiMenu3Line />
          </button>
        )}
      </div>
      {toggleOpen && (
        <div className={styles.mobile__nav}>
          <ul className={styles.mobile__nav__menu}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#wgpt3">What is GPT?</a>
            </li>
            <li>
              <a href="#possibility">Open AI</a>
            </li>
            <li>
              <a href="#features">Case Studies</a>
            </li>
            <li>
              <a href="#blog">Library</a>
            </li>
          </ul>

          <div className={styles.mobile__sign}>
            <a className={styles.signin} href="#sign-in">
              Sign in
            </a>
            <a className={styles.mobile__signup} href="#sign-up">
              Sign up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
