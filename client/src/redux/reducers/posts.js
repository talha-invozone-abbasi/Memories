import {
  CREATE_POST,
  DELETE_POST,
  FETCH_POST,
  LIKE_POST,
  NULL_POST,
  UPDATE_POST,
} from "../constants";

const initialState = {
  posts: [],
};

export const posts = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((e) => e.id !== payload._id),
      };
    case UPDATE_POST:
    case LIKE_POST:
      return {
        ...state,
        posts: state.posts.map((e) => (e._id === payload._id ? payload : e)),
      };
    case CREATE_POST:
      return {
        ...state,
        posts: payload,
      };
    case FETCH_POST:
      return {
        ...state,
        posts: payload,
      };
    case NULL_POST:
      return {
        ...state,
        posts: payload,
      };
    default: {
      return state;
    }
  }
};
