import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useLocation } from 'react-router-dom';

export default function GlitchTransition({ children }) {
  const location = useLocation();

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname} 
        timeout={500}       
        classNames="transition"
        unmountOnExit           
      >
        <div className="transition-screen">
          {children} 
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}
