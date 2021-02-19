import { setComment, deleteComment } from '../actions/commentActions';
import reducer from '../reducers/commentReducer';

describe('comment reducer test', () => {
  it('add a comment with SET_COMMENT', () => {
    const state = {
      blogs: Array(10).fill(null),
    };

    const action = setComment(4, 'comment');

    const newState = reducer(state, action);

    expect(newState).toEqual({
      blogs: [null, null, null, null, 'comment', null, null, null, null, null],
    });
  });

  it('delete a comment with DELETE_COMMENT', () => {
    const state = {
      blogs: Array(10).fill(null),
    };

    const action = deleteComment('comment');

    expect(reducer(state, action)).toEqual({
      blogs: [null, null, null, null, null, null, null, null, null, null],
    });
  });
});
