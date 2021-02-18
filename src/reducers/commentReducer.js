import { SET_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

const initialState = {
  list: [],
};

export default function reducer(state = initialState, action) {
  const { list } = state;
  switch (action.type) {
    case SET_COMMENT:
      return {
        ...state,
        list: list.map((comment, i) => {
          if (i === action.payload.index) return action.payload.comment;
          return comment;
        }),
      };
    case DELETE_COMMENT:
      return {
        ...state,
        list: list.filter((list) => list !== action.payload),
      };
    default:
      return state;
  }
}
