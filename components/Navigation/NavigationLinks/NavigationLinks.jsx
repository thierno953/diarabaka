import React from 'react'
import clsx from "clsx";
import classes from "./NavigationLinks.module.css"
import Link from 'next/link';

const NavigationLinks = ({ footer }) => {

  return (
    <ul className={clsx(classes.navLinks, { [classes.navLinksFooter]: footer })}>
      <li><Link href="/work" className={({ isActive }) => clsx({ [classes.navLinkActive]: isActive })}>Work</Link></li>
      <li><Link href="/about" className={({ isActive }) => clsx({ [classes.navLinkActive]: isActive })}>About me</Link></li>
      <li><Link href="/blogs" className={({ isActive }) => clsx({ [classes.navLinkActive]: isActive })}>Blogs</Link></li>
      <li><Link href="/contact" className={({ isActive }) => clsx({ [classes.navLinkActive]: isActive })}>Get in touch</Link></li>
    </ul>
);
};

export default NavigationLinks;
