import React, { useState, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Preloader from './components/Preloader';
import Userbox from './components/Userbox';

const App = () => {
  let [bg, setbg] = useState("App bg_1");
  let [theme, setTheme] = useState("bi bi-brightness-low-fill");
  let [text, setText] = useState("text_white");

  let [loading, setLoading] = useState({
    display: "flex"
  })

  let handleBg = () => {
    if (bg == "App bg_1") {
      setbg("App bg_2");
      setTheme("bi bi-moon-fill");
      setText("text_black");
    }
    else {
      setbg("App bg_1");
      setTheme("bi bi-brightness-low-fill");
      setText("text_white");
    }
  }

  // Preloader
  window.onload = () => {
    setLoading({
      display: "none"
    });
  }

  return (
    <div className={bg}>
      <Preloader display={loading}></Preloader>
      <Userbox textColor={text} />
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly"
      }}>
        <Navbar handleBg={handleBg} theme={theme} />
        <div style={{
          width:"70vw",
          height:"70vh"
        }}>
          <About/>
        </div>
      </div>
    </div>
  );
}


export default App;