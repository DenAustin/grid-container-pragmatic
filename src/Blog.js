import React from 'react'
import "./App.css"
import ClassApp from './ClassApp'

function Blog({blog}) {
  return (
    <div className="gridContainer_3" className="gridContainer_4">
      {blog}
      <ClassApp />
      {blog}
      <ClassApp />
      <ClassApp />

    </div>
  )
}

export default Blog
