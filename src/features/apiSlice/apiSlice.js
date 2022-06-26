import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import types from "@testing-library/user-event";
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
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Likes", id })),
              { type: "Likes", id: "LIST" },
            ]
          : [{ type: "Likes", id: "LIST" }],
    }),
    addLike: builder.mutation({
      query: (body) => {
        console.log("Adding Like", body);
        return {
          url: "/likes",
          headers: { "Content-type": "application/json" },
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "Likes", id: "LIST" }],
    }),
    removeLike: builder.mutation({
      query: (likeId) => ({
        url: `/likes/${likeId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, likeId) => [{ type: "Likes", likeId }],
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
