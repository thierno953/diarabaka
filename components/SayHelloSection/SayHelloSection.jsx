import React from "react";
import classes from "./SayHelloSection.module.css";
import globalClasses from "../../styles/Global.module.css";
import Link from "next/link";
import clsx from "clsx";

const SayHelloSection = () => {
  return (
    <div className={classes.sayHelloContainer}>
      <div className={classes.sayHelloContainerLeft}>
        <h3 className={clsx(globalClasses.h3, classes.sayHelloTitle)}>
          Say hello 👋
        </h3>
        <p className={classes.smallText}>
          Interested in working together or need any help?
          <br />
          Get in touch!
        </p>
      </div>
      <Link href="/contact" className={classes.getInTouchButton}>
        Get in touch!
      </Link>
    </div>
  );
};

export default SayHelloSection;
