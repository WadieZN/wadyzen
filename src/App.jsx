import Home from "./components/home";
import Menu from "./components/menu";
import About from "./components/about";
import Contact from "./components/contact";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import GlitchTransition from './components/transition';

export default function App() {
  const [isVisible, setIsVisible] = useState(false); 

  const toggleMenu = () => {
    setIsVisible(!isVisible); 
  };

  const closeMenu = () => {
    setIsVisible(false);
  };

  return (
    <Router>
      <div>
        <button className="menu-btn" onClick={toggleMenu}>
          {isVisible ? "Close" : "Menu"}
        </button>
        <Menu isVisible={isVisible} onClose={closeMenu} />

        <GlitchTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </GlitchTransition>
      </div>
    </Router>
  );
}
