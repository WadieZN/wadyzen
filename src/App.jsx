import Home from "./components/home";
import Menu from "./components/menu";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, Suspense, lazy } from "react";
import GlitchTransition from './components/transition';

const About = lazy(() => import('./components/about'));
const Contact = lazy(() => import('./components/contact'));

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
          <Suspense>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </GlitchTransition>
      </div>
    </Router>
  );
}
