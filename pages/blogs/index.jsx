import React, { useEffect, useState } from "react";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import globalClasses from "../../styles/Global.module.css";
import classes from "./BlogPage.module.css";
import Head from "next/head";
import BlogList from "@/components/blogs/BlogList/BlogList";
import { postFileNames, postsPath } from "@/utils/mdxUtils";
import TagFilter from "@/components/blogs/TagFilter/TagFilter";
import { useRouter } from "next/router";
import Pagination from "@/components/Pagination/Pagination";

const BlogPage = ({ posts }) => {
  // pagination
  const postPerPage = 3;
  const [currentPage, setCurrentPage] = useState(null);
  const router = useRouter();

  // tags
  const [selectedTag, setSelectedTag] = useState("all");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  //tags
  const allTagsSet = posts.reduce((acc, post) => {
    post.frontmatter.tags?.map((tag) => acc.add(tag));
    return acc;
  }, new Set([]));

  const allTagsArr = [...allTagsSet].sort((a, b) => a.localeCompare(b));
  allTagsArr.unshift("all");
  // console.log(allTagsArr);

  useEffect(() => {
    let tempPosts = [...posts];
    if (selectedTag && selectedTag !== "all") {
      tempPosts = posts.filter((post) =>
        post.frontmatter.tags.includes(selectedTag)
      );
    }
    // if (router.query) {
    const page = parseInt(router.query.page, 10) || 1;
    setCurrentPage(page);
    const start = (page - 1) * postPerPage;
    const end =
      start + postPerPage > posts.length - 1
        ? posts.length
        : start + postPerPage;
    const paginatedPosts = tempPosts.slice(start, end);
    setFilteredPosts(paginatedPosts);

    //setFilteredPosts(tempPosts);
  }, [selectedTag, posts, router]);

  // pagination
  const totalPages =
    selectedTag === "all"
      ? Math.ceil(posts.length / postPerPage)
      : Math.ceil(filteredPosts.length / postPerPage);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={globalClasses.container}>
        <div className={classes.blogflex}>
          <TagFilter
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
            tags={allTagsArr}
          />
          <div>
            <BlogList posts={filteredPosts} />
            <Pagination currentPage={currentPage} totalPages={totalPages} />
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogPage;

export async function getStaticProps() {
  const posts = postFileNames.map((slug) => {
    const content = fs.readFileSync(path.join(postsPath, slug));
    const { data } = matter(content);
    return {
      frontmatter: data,
      slug: slug.replace(/\.mdx?$/, ""),
    };
  });
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}
