import React from "react";
import "./Experience.css";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h5 style={{ color: "black" }}>What Skills Do I Have</h5>

      <div className="container experience__container">
        <div className="experience__content">
          <article className="experience__details">
            <AiOutlineCheckCircle className="experience__details-icon" />
            <div>
              <h4>React.js</h4>
            </div>
          </article>
          <article className="experience__details">
            <AiOutlineCheckCircle className="experience__details-icon" />
            <div>
              <h4>CSS</h4>
            </div>
          </article>
          <article className="experience__details">
            <AiOutlineCheckCircle className="experience__details-icon" />
            <div>
              <h4>JavaScript</h4>
            </div>
          </article>
          <article className="experience__details">
            <AiOutlineCheckCircle className="experience__details-icon" />
            <div>
              <h4>HTML</h4>
            </div>
          </article>
          <article className="experience__details">
            <AiOutlineCheckCircle className="experience__details-icon" />
            <div>
              <h4>OOP</h4>
            </div>
          </article>
          <article className="experience__details">
            <AiOutlineCheckCircle className="experience__details-icon" />
            <div>
              <h4>TypeScript</h4>
            </div>
          </article>
          <article className="experience__details">
            <AiOutlineCheckCircle className="experience__details-icon" />
            <div>
              <h4>Node JS</h4>
            </div>
          </article>
          <article className="experience__details">
            <AiOutlineCheckCircle className="experience__details-icon" />
            <div>
              <h4>MongoDB</h4>
            </div>
          </article>
          <article className="experience__details">
            <AiOutlineCheckCircle className="experience__details-icon" />
            <div>
              <h4>API developing</h4>
            </div>
          </article>
          <article className="experience__details">
            <AiOutlineCheckCircle className="experience__details-icon" />
            <div>
              <h4>GIT</h4>
            </div>
          </article>
          <article className="experience__details">
            <AiOutlineCheckCircle className="experience__details-icon" />
            <div>
              <h4>Express</h4>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
