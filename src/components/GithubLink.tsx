import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

// TODO: figure out how to properly style "footer" position for all screens
const GithubLink = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="p-2 pb-6 overflow-hidden lg:pb-2 lg:overflow-visible">
      <div
        className="transform origin-top-left lg:origin-bottom-left hover:scale-125 transition"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <a
          href="https://github.com/isaiahaiasi/blog-reader"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center lg:flex-col-reverse lg:items-baseline"
        >
          <IconContext.Provider value={{ color: "white", size: "3rem" }}>
            <FaGithub />
          </IconContext.Provider>

          {isHovering && (
            <p className="p-1 text-white align-middle text-sm">See code!</p>
          )}
        </a>
      </div>
    </div>
  );
};

export default GithubLink;
