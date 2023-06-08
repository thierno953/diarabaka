import React from "react";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import classes from "./BlogContent.module.css";

const components = {
  img: (props) => (
    <span className={classes.blogImage}>
      <Image {...props} layout="fill" alt={props.alt} objectFit="cover" />
    </span>
  ),
};

function BlogContent({ mdxSource }) {
  return (
    <div className={classes.detail}>
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
}

export default BlogContent;
