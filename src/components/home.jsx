import { Link } from "react-router-dom";
import Clock from "./clock";
import InfiniteScroll from "./infiniteScroll";
import CyberpunkGIFs from "./gifs";
import weatherImg from "./../assets/img/weather.png";
import memoryGameImg from "./../assets/img/memory-game.png";
import cinezenImg from "./../assets/img/cinezen.png";

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
      title: "CineZen, Movies & TV Series Explorer",
      description:
        "One of my favorite projects. Built with React and Tmdb API.",
      img: cinezenImg,
      url: "https://cine-zen.netlify.app/",
    },
    {
      title: "Weather App",
      description:
        "Built using WeatherAPI and Promises. One of my very first projects.",
      img: weatherImg,
      url: "https://wadiezn.github.io/weather-app/",
    },
    {
      title: "Memory Cards Game",
      description:
        "An entertaining game built using AniList API, to train your muscle memory.",
      img: memoryGameImg,
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
    {
      name: "NJ Pain Therapy",
      url: "https://wadiezn.github.io/NJP/",
    },
    {
      name: "Novato",
      url: "https://wadiezn.github.io/Novato/dashboard.html",
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
          <div className="left-clock">
            <Clock />
          </div>
          <div className="text-box">
            <h2 className="title">Little Introduction</h2>
            <p style={{ color: "#ffa9a9" }}>
              Welcome! I’ve moved to a new site with my latest projects. You can
              visit it{" "}
              <a href="https://wadiezn.netlify.app" target="_blank">
                here
              </a>
              .
            </p>
            <p>
              This is my old portfolio website, inspired by all the fancy
              cyberpunk-themed stuff (especially Spider-Verse and Edgerunners).
            </p>
            <p>
              I'm quite obviously a programmer. I code some random things when I
              feel like it. You can read more about me{" "}
              <Link to="/about">here.</Link>
            </p>
            <h3 className="subtitle">Some quick facts:</h3>
            <ul>
              <li>My main programming language is JavaScript.</li>
              <li>I'm pro at chess.</li>
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
                <a
                  href={project.url}
                  key={index}
                  target="_blank"
                  className="project"
                >
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
              <p style={{marginTop: "15px"}}>
                You can check some of my recent work at{" "}
                <a href="https://wadiezn.netlify.app">my new website</a>.
              </p>
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
