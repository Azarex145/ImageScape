import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex footer">
      <div className="textContent">
        <h3>ImageScape</h3>
        <p>Embark on a Journey Through Visual Dimensions at ImageScape</p>
      </div>
      <div className="flex socialLinks">
        <a
          href="https://www.linkedin.com/in/shivam-sharma-446a64202/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://github.com/Azarex145"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.instagram.com/shivam_exp621/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon" />
        </a>
      </div>
      <div className="copyright">
        <p>&copy; 2023 ImageScape </p>
      </div>
    </div>
  );
};

export default Footer;
