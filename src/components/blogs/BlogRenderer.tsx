"use client";

import { MDXProvider } from '@mdx-js/react';
import { mdxComponents } from './mdxComponents';
import dynamic from 'next/dynamic';
import type { FC } from 'react';

interface Props {
  slug: string;
}

const mdxMap: Record<string, () => Promise<any>> = {
  'show-git-branch-in-shell': () => import('./content/show-git-branch-in-shell.mdx'),
};

const BlogRenderer: FC<Props> = ({ slug }) => {
  const importFn = mdxMap[slug];

  if (!importFn) {
    return <p>Post not found.</p>;
  }

  const BlogPost = dynamic(importFn, { ssr: false });

  return (
    <MDXProvider components={mdxComponents}>
      <BlogPost />
    </MDXProvider>
  );
};

export default BlogRenderer;
