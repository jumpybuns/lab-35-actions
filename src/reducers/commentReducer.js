import { SET_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

const initialState = {
  list: Array([]).fill(null),
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_COMMENT:
      return {
        ...state,
        list: state.list.map((comment, i) => {
          if (i === action.payload.index) return action.payload.comment;
          return comment;
        }),
      };
    case DELETE_COMMENT:
      return {
        ...state,
        list: state.list.filter((list) => list.comment !== action.payload),
      };
    default:
      return state;
  }
}
