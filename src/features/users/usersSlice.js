import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    avatar: "avatar1.jpg",
    name: "Gabi",
    following: [2, 3, 4, 5],
    followers: [2, 3, 4, 5],
    posts: [1, 2],
    comments: [
      { id: 10, post: 10, content: "Comment from user Gabi on post id 10" },
      { id: 5, post: 5, content: "Comment from user Gabi on post id 5" },
    ],
  },
  {
    id: 2,
    avatar: "avatar2.jpg",
    name: "Jorge",
    posts: [3, 4],
    following: [1, 3, 4, 5],
    followers: [1, 3, 4, 5],
    comments: [
      { id: 9, post: 9, content: "Comment from user Jorge on post id 9" },
      { id: 1, post: 1, content: "Comment from user Jorge on post id 1" },
    ],
  },
  {
    id: 3,
    name: "Livia",
    avatar: "avatar3.jpg",
    posts: [5, 6],
    following: [1, 2, 4, 5],
    followers: [1, 2, 4, 5],
    comments: [
      { id: 8, post: 8, content: "Comment from user Livia on post id 8" },
      { id: 4, post: 4, content: "Comment from user Livia on post id 4" },
    ],
  },
  {
    id: 4,
    name: "Barb",
    posts: [7, 8],
    following: [1, 3, 2, 5],
    followers: [1, 3, 2, 5],
    avatar: "avatar4.jpg",
    comments: [
      { id: 3, post: 3, content: "Comment from user Barb on post id 3" },
      { id: 2, post: 2, content: "Comment from user Barb on post id 2" },
    ],
  },
  {
    id: 5,
    name: "Dudu",
    posts: [9, 10],
    following: [1, 3, 4, 2],
    followers: [1, 3, 4, 2],
    avatar: "avatar5.jpg",
    comments: [
      { id: 6, post: 6, content: "Comment from user Dudu on post id 6" },
      { id: 7, post: 7, content: "Comment from user Dudu on post id 7" },
    ],
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    /* addCommentToUser(state, action) {
      state.users
    }  */
  },
});

export const selectUserById = (state, userId) => {
  return state.users.find((user) => user.id === userId);
};

export default usersSlice.reducer;
