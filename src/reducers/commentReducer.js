import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

const initialState = {
  commentsList: [],
};

export default function commentReducer(state = initialState, action) {
  const { commentsList } = state;
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        commentsList: commentsList.map((comment, i) => {
          if (i === action.payload.index) return action.payload.comment;
          return comment;
        }),
      };
    case DELETE_COMMENT:
      return {
        ...state,
        commentsList: commentsList.filter(
          (commentList) => commentList !== action.payload
        ),
      };
    default:
      return state;
  }
}
