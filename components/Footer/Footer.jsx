import NavigationLinks from "../Navigation/NavigationLinks/NavigationLinks";
import NavigationSocialLinks from "../Navigation/NavigationSocialLinks/NavigationSocialLinks";
import classes from "./Footer.module.css"

const Footer = () => {
  return (
    <>
      <footer className={classes.footerContainer}>
        <NavigationLinks footer  />
        <NavigationSocialLinks />
      </footer>
    </>
  );
};

export default Footer;
