import React from "react";
import classes from "./WelcomeSection.module.css";
import ThiernoImage from "../../assets/about/team-3.jpg";
import clsx from "clsx";
import globalClasses from "../../styles/Global.module.css";
import Image from "next/image";

const WelcomeSection = () => {
  return (
    <div className={classes.welcomeContainer}>
      <h1 className={clsx(globalClasses.h1, classes.welcomeText)}>
        Hi there!
        <br />
        <span>I’m Thierno - A website developer based in Belgium.</span>
        <br />
        A full stack website developer specialising in javascript applications.
        <br />
        <span>I am currently learning DevOps and System Admin.</span>
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
