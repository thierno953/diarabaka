import React from "react";
import classes from "./Path.module.css";

const Path = () => {
  return (
    <>
      <svg
        className={classes.pathContainer}
        preserveAspectRatio="none"
        viewBox="0 0 2160 263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Wave"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
          fill="#0D2436"
        />
      </svg>
    </>
  );
};

export default Path;
