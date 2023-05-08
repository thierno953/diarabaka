import React from "react";
import classes from "./BlogHeader.module.css";
import globalClasses from "../../../styles/Global.module.css";
import Head from "next/head";
import { format } from "date-fns";

const BlogHeader = ({ frontmatter }) => {
  return (
    <div className={classes.detail}>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
      </Head>
      <h5 className={globalClasses.h3}>{frontmatter.title}</h5>
      {frontmatter.date && (
        <h5 className={globalClasses.h5}>
          {format(new Date(frontmatter.date), "PPP")}
        </h5> 
      )}
      {frontmatter.tags && (
        <p className={classes.tags}>
          Tags:{" "}
          {frontmatter.tags.map((tag, index, tags) => (
            <span key={tag}>
              {tag}
              {tags.length - 1 > index ? ", " : ""}
            </span>
          ))}
        </p>
      )}
      {frontmatter.description && (
        <p className={classes.description}>
          Description: {frontmatter.description}
        </p>
      )}
    </div>
  );
};

export default BlogHeader;
