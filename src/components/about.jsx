import { useEffect, useState } from "react";
import miles from './../assets/img/miles.png';

export default function About() {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const offsetX = (mouseX / innerWidth - 0.5) * -40;  
    const offsetY = (mouseY / innerHeight - 0.5) * -40;

    setOffsetX(offsetX);
    setOffsetY(offsetY); 
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id="about">
      <img
        src={miles}
        alt="Miles Morales"
        id="miles"
        draggable="false"
        style={{
          transform: `translate(${offsetX}px, ${offsetY}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />

      <div className="text">
        <div className="text-box">
        <h2 className="title">About Me</h2>
        <p>My name is Wadie Zaanoune, Wady for short. I'm {new Date().getFullYear() - 2002} years old. I'm currently working in a government position not related to this field, but would like to switch careers to something I love doing.</p>
        <p>Most of my skills are self taught rather than getting them from school. And like always, I must learn at least something new troughout the day, or I wouldn't feel satisfied.</p>
        <p>One of my dreams - related to this field - is to work in a <strong>Big</strong> tech company, and hopefuly one of the Silicon Valleys.</p>
        </div>
        <div className="text-box">
          <h2 className="title">Playtime</h2>
          <p>Two good hobbies I like to spend time with are Leetcode and chess. Just started Leetcoding in Summer 2024 which forced me to learn CS and data structures, cuz I can't stand not solving hard quizzes.</p>
          <p>My favorite show so far (as you may have concluded) is Spider Verse series, followed by Edgerunners. I also play lot of games, especially action and Sci-Fi.</p>
          <p>A list of completed games: Spider-Man Series, Sekiro, Cyberpunk 2077, Watch Dogs, GoW Series, Persona 5, Asura's Wrath, Assassin's Creed Series, Final Fantasy, and a lot more.</p>
        </div>
      </div>

    </div>
  );
}
