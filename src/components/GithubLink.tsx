import React from "react";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

// TODO: figure out how to properly style "footer" position for all screens
const GithubLink = () => (
  <div className="p-2 pt-4 overflow-hidden">
    <div className="transform origin-bottom-left hover:scale-125 transition">
      <a
        href="https://github.com/isaiahaiasi/blog-reader"
        target="_blank"
        rel="noreferrer noopener"
        className=""
      >
        <IconContext.Provider value={{ color: "white", size: "3rem" }}>
          <FaGithub />
        </IconContext.Provider>
      </a>
    </div>
  </div>
);

export default GithubLink;
