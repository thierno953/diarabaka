import React from "react";
import classes from "./BlogItemCard.module.css";
import globalClasses from "../../../styles/Global.module.css";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { format } from "date-fns";

const BlogItemCard = ({ post }) => {
  return (
    <div className={classes.blogPostContainer}>
      <h5 className={globalClasses.h3}>{post.frontmatter.title}</h5>
      {post.frontmatter.date && (
        <h5 className={classes.blogDate}>
          {format(new Date(post.frontmatter.date), "PPP")}
        </h5>
      )}
      {/* {post.frontmatter.tags && (
        <h5 className={classes.tags}>
          Tags:{" "}
          {post.frontmatter.tags.map((tag, index, tags) => (
            <span key={tag}>
              {tag}
              {tags.length - 1 > index ? ", " : ""}
            </span>
          ))}
        </h5>
      )} */}
      <p className={classes.blogPostDescription}>
        {post.frontmatter.description}
      </p>
      <Link href={`/blog/${post.slug}`} className={classes.blogPostTitle}>
        <h5 className={globalClasses.h5}>ReadMore</h5>
        <FiArrowRight />
      </Link>
    </div>
  );
};

export default BlogItemCard;
