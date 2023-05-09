import clsx from "clsx";
import { useRouter } from "next/router";
import React from "react";
import classes from "./TagFilter.module.css";

function TagFilter({ tags, selectedTag, setSelectedTag, className }) {
  const router = useRouter();
  return (
    <div className={classes.tagsfilter}>
      <h3>Tags:</h3>
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          className={clsx(
            classes.tagButton,
            selectedTag === tag && classes.selected
          )}
          onClick={() => {
            setSelectedTag(tag);
            router.push("/blogs");
          }}
        >
          {tag} 
        </button>
      ))}
    </div>
  );
}

export default TagFilter;
