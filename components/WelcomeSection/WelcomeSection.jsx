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
        Je suis Thierno M Barry
        <br />
        <span>développeur full stack basé en Belgique.</span>
        <br />
        Spécialisé dans les applications javascript.
        <br />
        <span>Japprends actuellement DevOps et System Admin.</span>
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
