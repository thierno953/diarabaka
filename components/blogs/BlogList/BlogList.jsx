import React from "react";
import BlogItemCard from "../BlogItemCard/BlogItemCard";
import classes from "./BlogList.module.css";

const BlogList = ({ posts }) => {
  return (
    <div className={classes.blogPostsWrapper}>
      {posts.map((post) => (
        <BlogItemCard post={post} key={post.slug} />
      ))}
    </div>
  );
};

export default BlogList;
