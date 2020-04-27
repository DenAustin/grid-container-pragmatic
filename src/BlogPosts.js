import React from 'react'
import Blog from "./Blog"

function BlogPosts({bloglist}) {
  return (
    bloglist.map(blog => {
      return <Blog key={blog} blog={blog} />
    })
  )
}

export default BlogPosts
