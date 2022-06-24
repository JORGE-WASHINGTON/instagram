import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";
import { fakeApi } from "../features/apiSlice/apiSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    [fakeApi.reducerPath]: fakeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakeApi.middleware),
});
