import React from "react";
import globalClasses from "../../styles/Global.module.css";
import classes from "./ContactPage.module.css";
import { FaEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <main className={classes.ContactPageContainer}>
      <div className={classes.contactLeftContainer}>
        <h1 className={globalClasses.h2}>
          Let’s have a chat,
          <br />
          Get in touch 👋
        </h1>
        <p className={classes.smallText}>
          Interested in working together or have any questions?
          <br />
          Contact me using the form or email me at
        </p>
        <p className={classes.email}>
          <FaEnvelopeOpen /> thiernobarry554@gmail.com
        </p>
        <br />
        <p className={classes.email}>
          <FaPhoneAlt /> +32 466 240 103
        </p>
      </div>
    </main>
  );
};

export default ContactPage;
