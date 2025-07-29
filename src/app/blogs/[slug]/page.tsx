"use client"

import { MDXProvider } from '@mdx-js/react'
import BlogPost from '@/components/blogs/content/show-git-branch-in-shell.mdx'
import { mdxComponents } from '@/components/blogs/mdxComponents'
import MainContainer from '@/components/layout/MainContainer'

export default function BlogPage() {
  return (
    <MainContainer>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{ maxWidth: "50rem" }}>
          <MDXProvider components={mdxComponents}>
            <BlogPost />
          </MDXProvider>
        </div>
      </div>
    </MainContainer>
  )
}
