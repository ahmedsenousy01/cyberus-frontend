import { postActionTypes } from "./post.types"

export const addPost = (post) => ({
  type: postActionTypes.ADD_POST,
  payload: post
})

export const removePost = (post) => ({
  type: postActionTypes.REMOVE_POST,
  payload: post
})

export const toggleLikePost = (post) => ({
  type: postActionTypes.TOGGLE_LIKE_POST,
  payload: post
})