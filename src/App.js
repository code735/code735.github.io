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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setLoading(false);
    });
  }, []);

  if (loading) return <Preloader />;

  return (
    <div className="App">
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly"
      }}>
        <Navbar />
        <div className='sections-render' style={{ width: "72vw", height: "73vh", overflowY: "scroll", borderRadius: "20px" }}>
          <Home />
          <About />
        </div>
      </div>
    </div>
  );
}


export default App;