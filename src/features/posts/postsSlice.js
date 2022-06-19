import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    date: new Date().toISOString(),
    image: "image1.jpg",
    likedBy: [2, 3, 4, 5],
    user: 1,
    description: "A post description",
    comments: [
      { comment_user: 2, content: "Comment from user Jorge on post id 1" },
    ],
  },
  {
    id: 2,
    date: new Date().toISOString(),
    image: "image2.jpg",
    likedBy: [2, 3, 4, 5],
    user: 1,
    description: "A post description",
    comments: [
      { comment_user: 4, content: "Comment from user Barb on post id 2" },
    ],
  },
  {
    id: 3,
    date: new Date().toISOString(),
    image: "image3.jpg",
    likedBy: [1, 3, 4, 5],
    user: 2,
    description: "A post description",
    comments: [
      { comment_user: 4, content: "Comment from user Barb on post id 3" },
    ],
  },
  {
    id: 4,
    date: new Date().toISOString(),
    image: "image10.jpg",
    likedBy: [1, 3, 4, 5],
    user: 2,
    description: "A post description",
    comments: [
      { comment_user: 3, content: "Comment from user Livia on post id 4" },
    ],
  },
  {
    id: 5,
    date: new Date().toISOString(),
    image: "image4.jpg",
    likedBy: [1, 2, 4, 5],
    user: 3,
    description: "A post description",
    comments: [
      { comment_user: 1, content: "Comment from user Gabi on post id 5" },
    ],
  },
  {
    id: 6,
    date: new Date().toISOString(),
    image: "image5.jpg",
    likedBy: [1, 2, 4, 5],
    user: 3,
    description: "A post description",
    comments: [
      { comment_user: 5, content: "Comment from user Dudu on post id 6" },
    ],
  },
  {
    id: 7,
    date: new Date().toISOString(),
    image: "image6.jpg",
    likedBy: [1, 2, 3, 5],
    user: 4,
    description: "A post description",
    comments: [
      { comment_user: 5, content: "Comment from user Dudu on post id 7" },
    ],
  },
  {
    id: 8,
    date: new Date().toISOString(),
    image: "image7.jpg",
    likedBy: [1, 2, 3, 5],
    user: 4,
    description: "A post description",
    comments: [
      { comment_user: 3, content: "Comment from user Livia on post id 8" },
    ],
  },
  {
    id: 9,
    date: new Date().toISOString(),
    image: "image8.jpg",
    likedBy: [1, 2, 3, 4],
    user: 5,
    description: "A post description",
    comments: [
      { comment_user: 2, content: "Comment from user Jorge on post id 9" },
    ],
  },
  {
    id: 10,
    date: new Date().toISOString(),
    image: "image9.jpg",
    likedBy: [1, 2, 3, 4],
    user: 5,
    description: "A post description",
    comments: [
      { comment_user: 1, content: "Comment from user Gabi on post id 10" },
    ],
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export const selectPostById = (state, postId) => {
  return state.posts.find((post) => post.id === postId);
};

export default postSlice.reducer;
