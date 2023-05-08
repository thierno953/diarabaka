import React from "react";
import { FiArrowLeft, FiArrowUp } from "react-icons/fi";
import classes from "./SingleBlog.module.css";
import Link from "next/link";
import globalClasses from "../../../styles/Global.module.css";
import BlogHeader from "../BlogHeader/BlogHeader";
import BlogContent from "../BlogContent/BlogContent";

const SingleBlog = ({ mdxSource, frontmatter }) => {
  return (
    <div>
      <Link href="/blogs" className={classes.blogPostTitle}>
        <FiArrowLeft />
        <h5 className={globalClasses.h5}>Home</h5>
      </Link>
      <BlogHeader frontmatter={frontmatter} />
      <BlogContent mdxSource={mdxSource} />
      <button
        className={classes.scrollToTop}
        type="button"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <FiArrowUp />
      </button>
    </div>
  ); 
};

export default SingleBlog;
