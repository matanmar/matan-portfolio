import React from "react";
import "./Projects.css";
import Img1 from "../../assets/movie_app.JPG";
import Img2 from "../../assets/weather-app.JPG";
import Img3 from "../../assets/food-recipe.JPG";
import Img4 from "../../assets/bank_the_number.JPG";

const data = [
  {
    id: 1,
    image: Img1,
    title: "Movies App created with React.js",
    github: "https://github.com/matanmar/Movie-s-App",
    demo: "https://matans-movies.netlify.app/",
  },
  {
    id: 2,
    image: Img2,
    title:
      "Weather Forecast by city, including  weather parameters charts. made with React.js",
    github: "https://github.com/matanmar/Weather-App",
    demo: "https://weather-app-matan.netlify.app/",
  },
  {
    id: 3,
    image: Img3,
    title:
      "Food recipe App, find recipe ans save your favorite. created with JaveScript (OOP).",
    github: "https://github.com/matanmar/Forkify",
    demo: "https://food-recipe-matan.netlify.app/",
  },
  {
    id: 4,
    image: Img4,
    title:
      "Bank the number, get to score of 100 before the other player. created with JaveScript.",
    github: "https://github.com/matanmar/bank-the-number",
    demo: "https://bank-the-number.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 style={{ color: "black" }}>Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <div key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img width="220" height="150" src={image} alt={title} />
              </div>
              <h3 className="project-text">{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="blank">
                  Live Demo
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
