import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import PostList from "./features/posts/PostList";
import SinglePostPage from "./features/posts/SinglePostPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:postId" element={<SinglePostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
