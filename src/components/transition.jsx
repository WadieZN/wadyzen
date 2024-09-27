import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useLocation } from 'react-router-dom';

export default function GlitchTransition({ children }) {
  const location = useLocation();  // Get the current route location

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname} 
        timeout={700}       
        classNames="glitch"
        unmountOnExit           
      >
        <div className="glitch-screen">
          {children} 
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}
