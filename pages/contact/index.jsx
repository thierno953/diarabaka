import React from "react";
import globalClasses from "../../styles/Global.module.css";
import classes from "./ContactPage.module.css";
import { FaEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import ContactForm from "@/components/ContactForm/ContactForm";
import clsx from "clsx";

const ContactPage = () => {
  return (
    <main className={clsx(globalClasses.container, classes.ContactPageContainer)}>
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
        <Link href="/contact" className={classes.email}>
          <FaEnvelopeOpen /> thiernobarry554@gmail.com
        </Link>
        <br />
        <Link href="/contact" className={classes.email}>
          <FaPhoneAlt /> +32 466 240 103
        </Link>
      </div>
      <div className={classes.contactRightFormContainer}>
        <ContactForm />
      </div>
    </main>
  );
};

export default ContactPage;
