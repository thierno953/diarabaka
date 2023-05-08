import React, { useEffect, useState } from "react";
import classes from "./Navigation.module.css";
import logo from "../../assets/thierno.png";
import Link from "next/link";
import Image from "next/image";
import NavigationLinks from "./NavigationLinks/NavigationLinks";
import NavigationSocialLinks from "./NavigationSocialLinks/NavigationSocialLinks";
import clsx from "clsx";
import { useRouter } from "next/router";

const Navigation = () => {
  const [navigationToggled, setNavigationToggled] = useState(false);

  const { pathname } = useRouter();

  useEffect(() => {
    // On navigation make sure to toggle the mobile navigation off and scroll to top
    setNavigationToggled(false);
    window.scrollTo(0, 0);
    document.body.style.overflowY = "auto";
  }, [pathname]);

  const handleHamburgerClicked = () => {
    setNavigationToggled((toggled) => {
      document.body.style.overflowY = toggled ? "auto" : "hidden";
      return !toggled;
    });
  };

  return (
    <div className={classes.navContainer}>
      <Link href="/">
        <Image src={logo} alt="Thierno logo" className={classes.logo} />
      </Link>
      <div className={classes.navRight}>
        <div className={classes.hideMobile}>
          <NavigationLinks />
          <NavigationSocialLinks />
        </div>
        <div
          className={clsx(classes.navHamburger, {
            [classes.navHamburgerActive]: navigationToggled,
          })}
          onClick={handleHamburgerClicked}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
      <div
        className={clsx(classes.navMobileContainer, {
          [classes.navMobileContainerActive]: navigationToggled,
        })}
      >
        <NavigationLinks />
        <NavigationSocialLinks />
      </div>
    </div>
  );
};

export default Navigation;
