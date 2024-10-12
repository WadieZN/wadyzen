import { Link } from 'react-router-dom';
import Clock from "./clock";
import InfiniteScroll from "./infiniteScroll";
import CyberpunkGIFs from "./gifs";
import project1 from "./../assets/img/weather.png";
import project2 from "./../assets/img/memory-game.png";

export default function Home() {
  const links = [
    { name: "Github", url: "https://github.com/WadieZN" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/wadie-zaanoune/" },
    { name: "Discord", url: "https://discord.com/users/773328631199039511" },
    { name: "Instagram", url: "https://www.instagram.com/wadyzen/" },
    { name: "X (Twitter)", url: "https://x.com/wadyzen" },
    { name: "Facebook", url: "https://web.facebook.com/wadie.zn" },
  ];

  const projects = [
    {
      title: "Weather App",
      description:
        "Built using WeatherAPI and Promises. One of my very first projects.",
      img: project1,
      url: "https://wadiezn.github.io/weather-app/",
    },
    {
      title: "Memory Cards Game",
      description:
        "An entertaining game built using AniList API, to train your muscle memory",
      img: project2,
      url: "https://wadyzen-memory-game.netlify.app/",
    },
  ];

  const otherProjects = [
    { name: "Etch a Sketch", url: "https://wadiezn.github.io/Etch-a-Sketch/" },
 
    { name: "Calculator", url: "https://wadiezn.github.io/Calculator/" },
    {
      name: "Nissan GTR Example",
      url: "https://wadyzen-nissan-gtr.netlify.app/",
    },
    { name: "Tic Tac Toe", url: "https://wadiezn.github.io/tic-tac-toe/" },
    {
      name: "Simple Responsive Homepage",
      url: "https://wadiezn.github.io/Homepage/",
    },
    { name: "Resume Maker", url: "https://wadyzen-resume.netlify.app/" },
  ];

  return (
    <>
      <div className="logo-content">
      <h1 className="logo">
        Wady<span>Zen</span>
      </h1>
      <p className="small-logo">
        W<span>Z</span>
      </p>
    </div>

      <div id="home">
        <div className="left">
        <div className='left-clock'>
          <Clock />
        </div>
          <div className="text-box">
            <h2 className="title">Little Introduction</h2>
            <p>
              This is my website, inspired by all the fancy cyberpunk-themed
              stuff (especially Spider-Verse and Edgerunners).
            </p>
            <p>
        I'm quite obviously a programmer. I code some random things when I feel like it. You can read more about me <Link to="/about">here.</Link>
      </p>
            <h3 className="subtitle">Some quick facts:</h3>
            <ul>
              <li>I'm from Morocco, still live here.</li>
              <li>My main programming language is JavaScript.</li>
              <li>I'm pro at chess.</li>
              <li>
                I'm a top contributor at{" "}
                <a href="https://www.theodinproject.com" target="_blank">
                  The Odin Project
                </a>
                .
              </li>
              <li>
                I draw cool things when I'm forced offline, especially anime
                characters.
              </li>
            </ul>
          </div>
          <InfiniteScroll />
          <div className="text-box">
            <h2 className="title">Projects</h2>
            <div className="projects">
              {projects.map((project, index) => (
                <a href={project.url} key={index} target="_blank" className="project">
                  <img src={project.img} alt="" />
                  <div className="info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </a>
              ))}
            </div>
            <p>And a couple of cool works:</p>
            <div className="other-projects">
              {otherProjects.map((otherProject, index) => (
                <a href={otherProject.url} key={index} target="_blank">
                  {otherProject.name}
                </a>
              ))}
              <p style={{marginTop: '15px'}}>I have more Front End projects from my recent internship, but they are kept private to respect the company's guidelines.</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right-clock">
            <Clock />
          </div>
          <div className="text-box">
            <h2 className="title">Social links</h2>
            <div className="links">
              {links.map((link, index) => (
                <a href={link.url} key={index} target="_blank">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <CyberpunkGIFs />
          <div className="text-box">
            <h2 className="title">Blogs</h2>
            <p>Placeholder for upcoming blogs.</p>
          </div>
        </div>
      </div>
    </>
  );
}
