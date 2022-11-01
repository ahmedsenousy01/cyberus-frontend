import { postActionTypes } from "./post.types"
import { addPost, removePost, toggleLikePost } from "./post.utils"

const INIT_STATE = {
  posts: []
}

const postReducer = (prevState = INIT_STATE, action) => {
  switch (action.type) {
    case postActionTypes.ADD_POST:
      return {
        ...prevState,
        posts: addPost(prevState.posts, action.payload)
      }
    case postActionTypes.REMOVE_POST:
      return {
        ...prevState,
        posts: removePost(prevState.posts, action.payload)
      }
    case postActionTypes.TOGGLE_LIKE_POST:
      return {
        ...prevState,
        posts: toggleLikePost(prevState.posts, action.payload)
      }
    default:
      return prevState
  }
}

export default postReducer;