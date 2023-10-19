import React from "react";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";

import { Cta, NavBar, Brand } from "./components";

import styles from "./app.module.css";
const App = () => {
  return (
    <div className="app">
      <div className={styles.gradient__bg}>
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
