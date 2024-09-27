import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: '2-digit', minute: '2-digit',
  });

  return (
    <div className='clock-container'>
      <h2 className='clock'>{formattedTime}</h2>
      <div className="overlay"></div>
      <div className="scanlines"></div>
    </div>
  );
};

export default Clock;
