import React from "react";
import "./About.css";
import ME from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import "./Header.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const About = () => {
  return (
    <>
      <header id="home">
        <div className="container.header__container">
          <div className="wapper">
            <div>
              <h1> Matan Marciano</h1>
              <h5 className="text-light"> Front end Developer</h5>
            </div>
          </div>
          <div className="header__icons__socials">
            <a href="https://www.linkedin.com/in/matan-marciano/">
              <AiFillLinkedin style={{ fontSize: "x-large" }} />
            </a>
            <a href="https://github.com/matanmar">
              <AiFillGithub style={{ fontSize: "x-large" }} />
            </a>
          </div>
        </div>
      </header>
      <section id="about" className="about">
        <h5 style={{ color: "black" }}>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>Full-Stack JS course + a few projects</small>
              </article>
            </div>

            <p>
              I am looking for a challenging job to start my career as a
              front-end developer. I have recently graduated a Full-Stack
              JavaScript course. Currently, I am investing my time on a few
              projects which use mainly React.js, HTML, and CSS in order to gain
              more experience and improve my front-end skills. I decided to
              deeply study the front-end side because I enjoy seeing, in a
              tangible way, the work that I do come to life. I have a sense of
              humor which creates a good atmosphere at work, love to work as
              part of a team, and like to learn from others’ experiences and
              share my knowledge. I pay attention to details and care about my
              workplace. I am a dedicated worker and am always curious to learn
              new things.
            </p>

            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About me" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
