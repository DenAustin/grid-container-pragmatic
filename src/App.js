import React, { useState } from 'react';
import BlogPosts from "./BlogPosts"
import MultiPersonArray from "./MultiPersonArray"
import ClassApp from './ClassApp';

// import logo from './logo.svg';
// import './App.css';

function App() {
  //const blogPostRef = useRef()//2 refer 2 dom <> l8r  
  
  const [blogs] = useState([["imgsaf ", "LHFATWJ ", "psum dolor sit amet, consectetur adipiscing elit. Duis non sapien nulla. Praesent eu nulla egestas, cursus nulla vitae, venenatis augue. Aenean sit amet nisi velit. Mauris molestie leo vel cursus cursus. Aliquam eu lorem leo. Morbi sed pulvinar ligula, quis ornare tortor. "], ["imgsaf ", "psum dolor sit amet, consectetur adipiscing elit. Duis non sapien nulla. Praesent eu nulla egestas, cursus nulla vitae, venenatis augue. Aenean sit amet nisi velit. Mauris molestie leo vel cursus cursus. Aliquam eu lorem leo. Morbi sed pulvinar ligula, quis ornare tortor. "], ["imgsaf ", "LHFATWJ ", "psum dolor sit amet, consectetur adipiscing elit. Duis non sapien nulla. Praesent eu nulla egestas, cursus nulla vitae, venenatis augue. Aenean sit amet nisi velit. Mauris molestie leo vel cursus cursus. Aliquam eu lorem leo. Morbi sed pulvinar ligula, quis ornare tortor. "]])
  return (
    <article className="text">
      <BlogPosts bloglist={blogs}/>
      <MultiPersonArray />

    </article>
  );
}

export default App;
