import React from "react";
import classes from "./NavigationSocialLinks.module.css";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import Link from "next/link";

const NavigationSocialLinks = () => {
  return (
    <ul className={classes.navSocialLinks}>
      <ul className={classes.navSocialLinks}>
        <li>
          <Link href="#">
            <FiLinkedin className={classes.socialIcon} />
          </Link>
        </li>
        <li>
          <Link href="#">
            <FiGithub className={classes.socialIcon} />
          </Link>
        </li>
      </ul>
    </ul>
  );
};

export default NavigationSocialLinks;
