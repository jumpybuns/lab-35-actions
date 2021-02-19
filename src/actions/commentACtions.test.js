import {
  createComment,
  CREATE_COMMENT,
  deleteComment,
  DELETE_COMMENT,
} from './commentActions';

describe('comment actions', () => {
  it('creates a comment using CREATE_COMMENT', () => {
    const action = createComment(0, 'comment');

    expect(action).toEqual({
      type: CREATE_COMMENT,
      payload: { postIndex: 0, commentText: 'comment' },
    });
  });

  it('deletes a comment using DELETE_COMMENT', () => {
    const action = deleteComment(0, 'comment');

    expect(action).toEqual({
      type: DELETE_COMMENT,
      payload: { postIndex: 0, commentText: 'comment' },
    });
  });
});
