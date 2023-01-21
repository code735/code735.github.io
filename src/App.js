import React, { useState, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Preloader from './components/Preloader';

const App = () => {
  let [bg, setbg] = useState("App bg_1");
  let [theme, setTheme] = useState("bi bi-brightness-low-fill");
  let [loading, setLoading] = useState({
    display: "flex"
  })

  let handleBg = () => {
    if (bg == "App bg_1") {
      setbg("App bg_2");
      setTheme("bi bi-moon-fill");
    }
    else {
      setbg("App bg_1");
      setTheme("bi bi-brightness-low-fill");
    }
  }


  window.onload = () => {
    setLoading({
      display: "none"
    });
  }

  return (
    <div className={bg}>
      <Preloader display={loading}></Preloader>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly"
      }}>
        <Navbar handleBg={handleBg} theme={theme} />
        <div className='sections-render' style={{ width: "72vw", height: "73vh", overflowY: "scroll", borderRadius: "20px" }}>
          <Home />
          <About />
        </div>
      </div>
    </div>
  );
}


export default App;