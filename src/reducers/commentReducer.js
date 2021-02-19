/* eslint-disable max-len */
import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

export default function commentReducer(state = {}, action) {
  console.log('PAYLOAD', action.payload);
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        [action.payload.postIndex]: [
          ...(state[action.payload.postIndex] || []),
          action.payload.text,
        ],
      };
    case DELETE_COMMENT:
      return {
        ...state,
        [action.payload.postIndex]: [
          ...state[action.payload.postIndex].slice(0, action.payload.textIndex),

          ...state[action.payload.postIndex].slice(
            action.payload.textIndex + 1
          ),
        ],
      };
    default:
      return state;
  }
}
