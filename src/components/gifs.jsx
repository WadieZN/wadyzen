import React, { useState, useEffect } from 'react';

export default function CyberpunkGIFs() {
  const gifEmbeds = [
    'https://giphy.com/embed/h58dtf5vTpjulO4M5o',
    'https://giphy.com/embed/l0Iycthxm6oRoT2Ao',
    'https://giphy.com/embed/MVgokUYqRcuhY3z5Hy',
    'https://giphy.com/embed/wI8NgmL6EbuQRuYguN',
    'https://giphy.com/embed/3o7qE6GmiEj9QsrAKA',
    'https://giphy.com/embed/FHEPD8bbvbRWZcwyWA',
    'https://giphy.com/embed/l4Ki26QTzUOc832iQ',
    'https://giphy.com/embed/qdE3mNNKvvXJHiogXs',
    'https://giphy.com/embed/Zbbbvez4VtDUGEtEjh',
    'https://giphy.com/embed/51QD2FJw7yPUDyHSHW',
    'https://giphy.com/embed/l4KidLqgsccKDPDCo',
    'https://giphy.com/embed/RbDKaczqWovIugyJmW',
    'https://giphy.com/embed/xUOwG5x1vFWzSF3Try',
    'https://giphy.com/embed/l41lYtgsrsHPrZ3Z6',
    'https://giphy.com/embed/cqTym0sHukkfarTIOR',
    'https://giphy.com/embed/xUPGcezGBHRv3mo1XO',
    'https://giphy.com/embed/uFiaPgBJVE1WhbhOVh',
    'https://giphy.com/embed/dZG5FKAkGY2yJTPOeo',
  ];

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const [shuffledGIFs, setShuffledGIFs] = useState(shuffleArray([...gifEmbeds]));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= shuffledGIFs.length) {
          setShuffledGIFs(shuffleArray([...gifEmbeds]));
          return 0;
        }
        return nextIndex;
      });
    }, 12000);

    return () => clearInterval(interval);
  }, [shuffledGIFs]);

  return (
    <div className="gif-container">
      <div className='gifs'>
          <iframe src={shuffledGIFs[currentIndex]} allowFullScreen title="cyberpunk-gif"></iframe>
          <div className="overlay"></div>
          <div className="scanlines"></div>
      </div>
      <small>Not sure why I put these here, but they look kinda cool, right?</small>
    </div>
  );
};