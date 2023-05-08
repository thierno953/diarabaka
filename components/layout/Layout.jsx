import React from "react";
import globalClasses from "../../styles/Global.module.css";

const Layout = ({ children }) => {
  return <main className={globalClasses.container}>{children}</main>;
};

export default Layout;
