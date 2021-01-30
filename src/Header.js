import React from "react";
import "./App.css";

function Header() {
  return (
    <div className="header">
      <h1>Successful Front-end Development</h1>
      <p className="des_paragraph">
        Hi. I’m Talha, a freelance Front-end Developer with 2 years
        commercial experience creating successful websites.
      </p>
      <div className="header_images">
        <div className="header_img_1">
          <img
            src="https://ianlunn.co.uk/static/0fe210187ee16bce95bb97c7ab3db41b/98c70/feature__web.webp"
            width="150"
          />
          <h2 className="img_heading">Front-end development</h2>
          <p className="img_paragraph">
            Responsive websites built for an optimal user experience that
            achieves your business goals.
          </p>
        </div>
        <div className="header_img_1">
          <img
            src="https://ianlunn.co.uk/static/54f14637ec376524313424344767614c/98c70/feature__tools.webp"
            width="150"
          />
          <h2 className="img_heading">Performance, SEO, & accessibility testing</h2>
          <p className="img_paragraph">
            Make your website fast, easy to find, and reach the widest audience
            possible.  
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
