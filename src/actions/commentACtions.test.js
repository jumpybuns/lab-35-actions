import {
  createComment,
  CREATE_COMMENT,
  deleteComment,
  DELETE_COMMENT,
} from './commentActions';

describe('comment actions', () => {
  it('creates a comment using CREATE_COMMENT', () => {
    const action = createComment({ id: 1, comment: 'comment' });

    expect(action).toEqual({
      type: CREATE_COMMENT,
      payload: { id: 1, comment: 'comment' },
    });
  });

  it('deletes a comment using DELETE_COMMENT', () => {
    const action = deleteComment({ id: 1, comment: 'comment' });

    expect(action).toEqual({
      type: DELETE_COMMENT,
      payload: { id: 1, comment: 'comment' },
    });
  });
});
