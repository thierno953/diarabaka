import React from "react";
import classes from "./WelcomeSection.module.css";
import ThiernoImage from "../../assets/about/tmb.jpg";
import clsx from "clsx";
import globalClasses from "../../styles/Global.module.css";
import Image from "next/image";

const WelcomeSection = () => {
  return (
    <div className={classes.welcomeContainer}>
      <h1 className={clsx(globalClasses.h1, classes.welcomeText)}>
        I am Thierno M Barry
        <br />
        <span className={classes.span}>
          full stack developer based in Belgium.
        </span>
        <br />
        Specialized in javascript applications.
        <br />
        <span className={classes.span}>
          I am currently learning DevOps and System Admin.
        </span>
      </h1>
      <Image
        src={ThiernoImage}
        alt="Thierno"
        className={classes.welcomeImage}
      />
    </div>
  );
};

export default WelcomeSection;
