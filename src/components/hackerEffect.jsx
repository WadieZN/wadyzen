import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const randomLetter = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return characters[Math.floor(Math.random() * characters.length)];
};

const isSystemFast = () => {
  const cores = navigator.hardwareConcurrency || 2; 
  const memory = navigator.deviceMemory || 4;

  return cores >= 4 && memory >= 8;
};

export default function HackerEffectMenuItem({ targetText, onClose }) {
  const [displayText, setDisplayText] = useState(targetText);
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [effectRunning, setEffectRunning] = useState(false);
  const [systemIsFast, setSystemIsFast] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setSystemIsFast(isSystemFast());
  }, []);

  useEffect(() => {
    let interval;
    let revealTimeout;

    if (systemIsFast && effectRunning && index < targetText.length) {
      interval = setInterval(() => {
        const randomPart = Array(targetText.length - index)
          .fill(0)
          .map(() => randomLetter())
          .join('');

        const newText = targetText.slice(0, index) + randomPart;
        setDisplayText(newText);
      }, 10);

      revealTimeout = setTimeout(() => {
        setIndex((prevIndex) => Math.min(prevIndex + 1, targetText.length));
      }, 100);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(revealTimeout);
    };
  }, [systemIsFast, effectRunning, index, targetText]);

  useEffect(() => {
    if (isHovering) {
      setEffectRunning(true);
      setIndex(0);
    }
  }, [isHovering]);

  useEffect(() => {
    if (index === targetText.length) {
      setEffectRunning(false);
      setDisplayText(targetText);
    }
  }, [index, targetText]);

  const handleClick = () => {
    if (targetText === 'Home') {
      const targetRoute = '/'; 
      navigate(targetRoute); 
      onClose();
    } else { 
      const targetRoute = `/${targetText.toLowerCase()}`; 
      navigate(targetRoute); 
      onClose();
    }
  };

  return (
    <button
      className="menu-item"
      onMouseEnter={() => {
        setIsHovering(true);
        setIndex(0);
      }}
      onMouseLeave={() => setIsHovering(false)}
      onClick={handleClick} 
    >
      {displayText}
    </button>
  );
}
