import React from "react";
import "./App.css";

function Websites() {
  return (
    <div className="Websites">
      <h1 className="feature_work">Featured Work</h1>
      <div className="first_website">
        <div className="git__link">
          <h2>New-Year-Countdown</h2>
          <button>
          <a href="https://github.com/MuhammadTalha123/Nea-Year-Countdown" target="_blank">
            View Project On GitHub
          </a>
          </button>
        </div>
        <div className="porject">
          <iframe
            src="https://muhammadtalha123.github.io/Nea-Year-Countdown/"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
      <div className="first_website">
        <div className="git__link">
          <h2>Rlaxer</h2>
          <button>
          <a href="https://github.com/MuhammadTalha123/Rlaxer" target="_blank">
            View Project On GitHub
          </a>
          </button>
        </div>
        <div className="porject">
          <iframe
            src="https://muhammadtalha123.github.io/Rlaxer/"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
      <div className="first_website">
        <div className="git__link">
          <h2>Speach-text-reader</h2>
          <button>
          <a href="https://github.com/MuhammadTalha123/Speach-text-reader" target="_blank">
            View Project On GitHub
          </a>
          </button>
        </div>
        <div className="porject">
          <iframe
            src="https://muhammadtalha123.github.io/Speach-text-reader/"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
      <div className="first_website">
        <div className="git__link">
          <h2>Pak-Express</h2>
          <button>
          <a href="https://github.com/MuhammadTalha123/react-ecommrace" target="_blank">
            View Project On GitHub
          </a>
          </button>
        </div>
        <div className="porject">
          <iframe
            src="https://guarded-bastion-43579.herokuapp.com/"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
      <div className="first_website">
        <div className="git__link">
          <h2>Travel-App</h2>
          <button>
          <a href="https://github.com/MuhammadTalha123/travel-app-with" target="_blank">
            View Project On GitHub
          </a>
          </button>
        </div>
        <div className="porject">
          <iframe
            src="https://murmuring-cove-31889.herokuapp.com/"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Websites;
