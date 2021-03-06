import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { v4 as uuidv4 } from "uuid";

// Define a service using a base URL and expected endpoints
export const fakeApi = createApi({
  reducerPath: "fakeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  tagTypes: ["Likes"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `/posts`,
      providesTags: (result) =>
        // is result available?
        result
          ? // successful query
            [
              ...result.map(({ id }) => ({ type: "Posts", id })),
              { type: "Posts", id: "LIST" },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
            [{ type: "Posts", id: "LIST" }],
    }),
    addLike: builder.mutation({
      query: (body) => {
        return {
          url: `/likes/${body.postId}/like`,
          headers: { "Content-type": "application/json" },
          method: "POST",
          body,
        };
      },
      async onQueryStarted(body, { dispatch, queryFulfilled }) {
        console.log("started");
        // When we start the request, just immediately update the cache
        const patchResult = dispatch(
          fakeApi.util.updateQueryData("getPosts", undefined, (draft) => {
            console.log(draft);
            if (draft[body.postId - 1].likes === null) {
              draft[body.postId - 1].likes = [];
              draft[body.postId - 1].likes.push({
                post_id: body.postId,
                like_author_id: body.user_id,
              });
            } else {
              draft[body.postId - 1].likes.push({
                post_id: body.postId,
                like_author_id: body.user_id,
              });
            }
          })
        );
        try {
          await queryFulfilled;
        } catch (error) {
          patchResult.undo();
        }
      },
    }),
    removeLike: builder.mutation({
      query: (body) => {
        return {
          url: `/likes/${body.postId}/unlike`,
          headers: { "Content-type": "application/json" },
          method: "POST",
          body,
        };
      },
      async onQueryStarted(body, { dispatch, queryFulfilled }) {
        console.log("started");
        // When we start the request, just immediately update the cache
        const patchResult = dispatch(
          fakeApi.util.updateQueryData("getPosts", undefined, (draft) => {
            console.log(draft);
            const found = draft[body.postId - 1].likes.find(
              (el) => el.like_author_id === body.user_id
            );
            const index = draft[body.postId - 1].likes.indexOf(found);
            if (index > -1) {
              draft[body.postId - 1].likes.splice(index, 1);
            }
          })
        );
        try {
          await queryFulfilled;
        } catch (error) {
          patchResult.undo();
        }
      },
    }),
    addComment: builder.mutation({
      query: (body) => {
        return {
          url: `/comments/${body.postId}/add`,
          headers: { "Content-type": "application/json" },
          method: "POST",
          body,
        };
      },
      async onQueryStarted(body, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          dispatch(
            fakeApi.util.updateQueryData("getPosts", undefined, (draft) => {
              draft[body.postId - 1].comments.push({
                comment_id: data.insertId,
                comment_author: "smcilheran4",
                comment_content: body.content,
                comment_author_id: body.user_id,
                comment_author_avatar:
                  "https://robohash.org/teneturquibusdamducimus.png?size=50x50&set=set1",
              });
            })
          );
        } catch (e) {
          console.log(e);
        }
      },
    }),
    /* getUsers: builder.query({
      query: () => "/users",
    }),
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
    }), */
    /* etPost: builder.query({
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
    }), */
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPostsQuery,
  useAddCommentMutation,
  useAddLikeMutation,
  useRemoveLikeMutation,
} = fakeApi;
