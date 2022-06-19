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
      { comment_user: "livia", comment: "what the fuck is wrong with you" },
    ],
  },
  {
    id: 2,
    date: new Date().toISOString(),
    image: "image2.jpg",
    likedBy: [2, 3, 4, 5],
    user: 1,
    description: "A post description",
    comments: [{ comment_user: "barbara", comment: "another one" }],
  },
  {
    id: 3,
    date: new Date().toISOString(),
    image: "image3.jpg",
    likedBy: [1, 3, 4, 5],
    user: 2,
    description: "A post description",
    comments: [{ comment_user: "ivanilza", comment: "lavar os prato" }],
  },
  {
    id: 4,
    date: new Date().toISOString(),
    image: "image10.jpg",
    likedBy: [1, 3, 4, 5],
    user: 2,
    description: "A post description",
    comments: [{ comment_user: "ivanilza", comment: "lavar os prato" }],
  },
  {
    id: 5,
    date: new Date().toISOString(),
    image: "image4.jpg",
    likedBy: [1, 2, 4, 5],
    user: 3,
    description: "A post description",
    comments: [{ comment_user: "ivanilza", comment: "lavar os prato" }],
  },
  {
    id: 6,
    date: new Date().toISOString(),
    image: "image5.jpg",
    likedBy: [1, 2, 4, 5],
    user: 3,
    description: "A post description",
    comments: [{ comment_user: "ivanilza", comment: "lavar os prato" }],
  },
  {
    id: 7,
    date: new Date().toISOString(),
    image: "image6.jpg",
    likedBy: [1, 2, 3, 5],
    user: 4,
    description: "A post description",
    comments: [{ comment_user: "ivanilza", comment: "lavar os prato" }],
  },
  {
    id: 8,
    date: new Date().toISOString(),
    image: "image7.jpg",
    likedBy: [1, 2, 3, 5],
    user: 4,
    description: "A post description",
    comments: [{ comment_user: "ivanilza", comment: "lavar os prato" }],
  },
  {
    id: 9,
    date: new Date().toISOString(),
    image: "image8.jpg",
    likedBy: [1, 2, 3, 4],
    user: 5,
    description: "A post description",
    comments: [{ comment_user: "ivanilza", comment: "lavar os prato" }],
  },
  {
    id: 10,
    date: new Date().toISOString(),
    image: "image9.jpg",
    likedBy: [1, 2, 3, 4],
    user: 5,
    description: "A post description",
    comments: [{ comment_user: "ivanilza", comment: "lavar os prato" }],
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
