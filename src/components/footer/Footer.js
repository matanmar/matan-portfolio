import React from "react";
import "./Footer.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Matan Marciano
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Expeirience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/matan-marciano/">
          <AiFillLinkedin style={{ fontSize: "x-large" }} />
        </a>
        <a href="https://github.com/matanmar">
          <AiFillGithub style={{ fontSize: "x-large" }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
