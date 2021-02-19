/* eslint-disable max-len */
import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

const initialState = {
  comments: [],
  commentId: 1,
};

export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.commentId !== action.payload
        ),
      };
    default:
      return state;
  }
}
