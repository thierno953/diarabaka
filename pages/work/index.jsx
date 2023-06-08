import React from "react";
import classes from "./WorkPage.module.css";

import ImageOne from "../../assets/blog/demo.png";
import ImageTwo from "../../assets/blog/demo.png";
import ImageThree from "../../assets/blog/demo.png";
import WorkPost from "@/components/WorkPost/WorkPost";
import PageHeading from "@/components/PageHeading/PageHeading";

const tempWorkPosts = [
  {
    id: 1,
    title: "Node Expressjs Job Application",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium fuga iure magnam sunt quidem mollitia, ad quo ut harum saepe! Perspiciatis",
    imageUrl: ImageOne,
    websiteUrl: "https://nodejs-t7ka.onrender.com/api-doc/",
  },
  {
    id: 2,
    title: "Common Surface - Web app development for managing hybrid working",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium fuga iure magnam sunt quidem mollitia, ad quo ut harum saepe! Perspiciatis ullam odio consequuntur accusamus inventore doloribus tenetur ipsa!",
    imageUrl: ImageTwo,
    websiteUrl: "https://react-vitejs-eta.vercel.app/",
  },
  {
    id: 3,
    title: "RevenueML - Web application development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium fuga iure magnam sunt quidem mollitia, ad quo ut harum saepe! Perspiciatis ullam odio consequuntur accusamus inventore doloribus tenetur ipsa!",
    imageUrl: ImageThree,
    websiteUrl: "https://react-vitejs-eta.vercel.app/",
  },
];

const WorkPage = () => {
  return (
    <div className={classes.workWrapper}>
      <PageHeading
        title="Portfolio"
        description={
          <>
            I work as a full stack web developer, mostly using React and NodeJS.
            <br />
            Check out some of the projects I worked on.
          </>
        }
      />
      {tempWorkPosts.map((post, i) => (
        <WorkPost key={i} post={post} reversed={i % 2 !== 0} />
      ))}
    </div>
  );
};

export default WorkPage;
