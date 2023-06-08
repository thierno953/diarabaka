import React from "react";
import globalClasses from "../../styles/Global.module.css";
import classes from "./PageHeading.module.css";

const PageHeading = ({ title, description }) => {
  return (
    <div className={classes.pageHeadingContainer}>
      <h2 className={globalClasses.h2}>{title}</h2>
      <p className={classes.smallText}>{description}</p>
    </div>
  );
};

export default PageHeading;
