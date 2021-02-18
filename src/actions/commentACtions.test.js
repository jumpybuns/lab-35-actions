import {
  setComment,
  SET_COMMENT,
  deleteComment,
  DELETE_COMMENT,
} from './commentActions';

describe('comment actions', () => {
  it('creates a comment using SET_COMMENT', () => {
    const action = setComment(0, 'comment');

    expect(action).toEqual({
      type: SET_COMMENT,
      payload: { index: 0, comment: 'comment' },
    });
  });

  it('deletes a comment using DELETE_COMMENT', () => {
    const action = deleteComment(0, 'comment');

    expect(action).toEqual({
      type: DELETE_COMMENT,
      payload: { index: 0, commentIndex: 'comment' },
    });
  });
});
