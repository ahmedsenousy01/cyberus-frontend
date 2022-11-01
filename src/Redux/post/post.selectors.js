import { createSelector } from "reselect";

export const postsSelector = createSelector(
  state => state.posts,
  posts => posts.posts
)