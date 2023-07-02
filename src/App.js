import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import GitHub from './Components/GitHub';
import Contact from './Components/Contact';
import Copyright from './Components/Copyright';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <GitHub/>
      <Contact/>
      <Copyright/>
    </div>
  );
}

export default App;
