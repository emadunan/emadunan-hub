// components/BlogCard.tsx
import Link from "next/link";
import styles from "./BlogCard.module.css";

interface Props {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

export default function BlogCard({ slug, title, excerpt, date }: Props) {
  return (
    <Link href={`/blogs/${slug}`} className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.date}>{new Date(date).toLocaleDateString()}</span>
      </div>
      <p className={styles.excerpt}>{excerpt}</p>
    </Link>
  );
}
