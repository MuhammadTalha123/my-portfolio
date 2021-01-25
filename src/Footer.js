import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="image__paragraph">
        <img
          src="https://scontent.flhe3-1.fna.fbcdn.net/v/t1.0-9/126204657_1071787516598378_8134734274694291983_o.jpg?_nc_cat=109&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeE3x6hT1zC7J4nbSRcBPZEb701KifQCR0nvTUqJ9AJHSQAYhFrj3HwpSU1lV0yml5c-EYDaSyiBD-DG0XNtdD1M&_nc_ohc=AlHCipy9JU0AX8z66uL&_nc_ht=scontent.flhe3-1.fna&oh=94e59d3bcc28d17b9f7854cd3b6ace7e&oe=6033B529"
          width="150"
          height="200"
        />
        <p>
          I am specialized in custom web solutions using state of the art
          technologies like latest HTML, CSS, JavaScript, ReactJS and Firebase.
          To create beautiful UI can use Bootstrap CSS, Materialize CSS, and Ant
          designs. Along with that have passion to learn and explore to keep my
          skillset and knowledge up to date with the industry. A team player
          with good communication and management skills.
        </p>
      </div>
      <div className="icons__links">
        <a href="https://github.com/MuhammadTalha123" target="_blank">
          <i className="fa fa-github" aria-hidden="true">GITHUB</i>
        </a>
        <a href="https://www.linkedin.com/in/muhammad-talha-6a3156201/" target="_blank">
          <i className="fa fa-linkedin-square" aria-hidden="true">LINKEDIN</i>
        </a>
        <a href="https://www.fiverr.com/talha_203" target="_blank">
          <i className="fa fa-address-book" aria-hidden="true">FIVERR</i>
        </a>
        <a href="https://www.upwork.com/freelancers/~0145a5b53c8c9b9fd1" target="_blank">
          <i className="fa fa-address-card" aria-hidden="true">UP WORK</i>
        </a>
      </div>
      <p className="last__paragraph">Copyright © 2021 Muhammad Talha Design Limited</p>
    </div>
  );
};

export default Footer;
