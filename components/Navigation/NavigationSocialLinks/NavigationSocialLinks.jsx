import React from "react";
import classes from "./NavigationSocialLinks.module.css";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import Link from "next/link";

const NavigationSocialLinks = () => {
  return (
    <ul className={classes.navSocialLinks}>
      <ul className={classes.navSocialLinks}>
        <li>
          <Link href="https://www.linkedin.com/in/thierno-barry-0b8527203">
            <FiLinkedin className={classes.socialIcon} />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/thierno953">
            <FiGithub className={classes.socialIcon} />
          </Link>
        </li>
      </ul>
    </ul>
  );
};

export default NavigationSocialLinks;
