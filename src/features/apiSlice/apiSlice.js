import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { v4 as uuidv4 } from "uuid";

// Define a service using a base URL and expected endpoints
export const fakeApi = createApi({
  reducerPath: "fakeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/" }),
  tagTypes: ["Likes"],
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
    }),
    getPosts: builder.query({
      query: () => `/posts`,
    }),
    getComments: builder.query({
      query: () => "/comments",
    }),
    getLikesByPostId: builder.query({
      query: (postId) => `/likes?postId=${postId}`,
      providesTags: ["Likes"],
    }),
    addLike: builder.mutation({
      query: (like) => ({
        url: "/likes",
        headers: { "Content-type": "application/json" },
        method: "POST",
        body: like,
      }),
      invalidatesTags: ["Likes"],
      transformResponse: (response, meta, arg) => response.data,
    }),
    removeLike: builder.mutation({
      query: (likeId) => ({
        url: `/likes/${likeId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Likes"],
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
} = fakeApi;
