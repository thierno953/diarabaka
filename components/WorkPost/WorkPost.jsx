import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import globalClasses from "../../styles/Global.module.css";
import classes from "./WorkPost.module.css";

const WorkPost = ({ post, reversed }) => {
  return (
    <div
      className={clsx(classes.workPost, {
        [classes.workPostReversed]: reversed,
      })}
    >
      <Image
        src={post.imageUrl}
        alt={post.title}
        className={classes.postImage}
      />
      <div className={reversed ? classes.postInfoReversed : classes.postInfo}>
        <div>
          <h3 className={globalClasses.h3}>{post.title}</h3>
          <p className={classes.postDescription}>{post.description}</p>
        </div>
        <Link href={post.websiteUrl} className={classes.visitWebsiteButton}>
          Visit website
        </Link>
      </div>
    </div>
  );
};

export default WorkPost;
