import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const fakeApi = createApi({
  reducerPath: "fakeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/" }),
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
    }),
    getPosts: builder.query({
      query: () => `/posts`,
    }),
    addLike: builder.mutation({
      query: ({ id, currentUser }) => ({
        url: `posts/${id}`,
        headers: { "Content-type": "application/json" },
        method: "PATCH",
        body: currentUser,
      }),
      transformResponse: (response, meta, arg) => response.data,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserByIdQuery, useGetPostsQuery } = fakeApi;
