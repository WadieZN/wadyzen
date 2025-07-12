import Home from "./components/home";
import Menu from "./components/menu";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useState, Suspense, lazy, useEffect } from "react";
import PageLoad from "./components/pageload";

const About = lazy(() => import("./components/about"));
const Contact = lazy(() => import("./components/contact"));

function PageTransition() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location]);

  return loading ? <PageLoad /> : null;
}

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  const closeMenu = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    About.preload && About.preload();
    Contact.preload && Contact.preload();
  }, []);

  return (
    <Router>
      <div>
        <button className="menu-btn" onClick={toggleMenu}>
          {isVisible ? "Close" : "Menu"}
        </button>
        <Menu isVisible={isVisible} onClose={closeMenu} />

        <PageTransition />

        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}
