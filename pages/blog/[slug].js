import React from "react";
import path from "path";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/night-owl.css";
import SingleBlog from "@/components/blogs/SingleBlog/SingleBlog";
import { postFileNames, postsPath } from "@/utils/mdxUtils";

export default function SingleBlogPage({ mdxSource, frontmatter }) {
  return <SingleBlog mdxSource={mdxSource} frontmatter={frontmatter} />;
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const filePath = path.join(postsPath, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data: frontmatter } = matter(fileContent);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });
  
  return {
    props: {
      slug,
      mdxSource,
      frontmatter: JSON.parse(JSON.stringify(frontmatter)),
    },
  };
}

export async function getStaticPaths() {
  const postsPaths = postFileNames.map((slug) => ({
    params: {
      slug: slug.replace(/\.mdx?$/, ""),
    },
  }));

  return {
    paths: postsPaths,
    fallback: false,
  };
}
