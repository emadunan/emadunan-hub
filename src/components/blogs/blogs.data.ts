export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'show-git-branch-in-shell',
    title: 'Show Git Branch in Shell',
    excerpt: 'Enhance your terminal prompt by displaying the current Git branch.',
    date: '2025-07-29',
  },
  // Add more posts...
];