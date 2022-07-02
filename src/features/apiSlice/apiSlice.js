import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { v4 as uuidv4 } from "uuid";

// Define a service using a base URL and expected endpoints
export const fakeApi = createApi({
  reducerPath: "fakeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/" }),
  tagTypes: ["Likes"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
    }),
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
    }),
    getPosts: builder.query({
      query: () => `/posts`,
    }),
    getPost: builder.query({
      query: (id) => `/posts/${id}`,
    }),
    getComments: builder.query({
      query: () => "/comments",
    }),
    getLikesByPostId: builder.query({
      query: (postId) => `/likes?postId=${postId}`,
      providesTags: (result, error, arg) =>
        result ? [{ type: "Likes", id: arg }] : ["Likes"],
    }),
    getLike: builder.query({
      query: (likeId) => `/likes/${likeId}`,
      providesTags: (result, error, likeId) => [{ type: "Likes", likeId }],
    }),
    addLike: builder.mutation({
      query: (body) => {
        return {
          url: "/likes",
          headers: { "Content-type": "application/json" },
          method: "POST",
          body,
        };
      },
      invalidatesTags: (result, error, arg) => [
        { type: "Likes", id: arg.postId },
      ],
    }),
    removeLike: builder.mutation({
      query: (body) => ({
        url: `/likes/${body.likeId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Likes", id: arg.postId },
      ],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetUserByIdQuery,
  useGetPostsQuery,
  useAddLikeMutation,
  useGetLikesByPostIdQuery,
  useRemoveLikeMutation,
  useGetLikeQuery,
  useGetPostQuery,
  useGetUsersQuery,
} = fakeApi;
