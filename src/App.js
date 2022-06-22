import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import PostList from "./features/posts/PostList";
import SinglePostPage from "./features/posts/SinglePostPage";
import UserPage from "./features/users/UserPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/p/:postId" element={<SinglePostPage />} />
        <Route path="/:username" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
