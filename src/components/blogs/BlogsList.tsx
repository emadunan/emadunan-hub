import React from "react";
import styles from "./BlogsList.module.css";
import { blogPosts } from "./blogs.data";
import BlogCard from "./BlogCard";

const BlogsList: React.FC = () => {
  return (
    <div className={styles.container}>
      {blogPosts.map((q, index) => (
        <BlogCard key={index} {...q} />
      ))}
    </div>
  );
};

export default BlogsList;