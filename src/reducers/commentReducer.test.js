import { createComment, deleteComment } from '../actions/commentActions';
import commentReducer from './commentReducer';

const commentDummy = {
  text: 'fdfd',
  commentId: 1,
  postId: 5,
};

describe('Comment Reducer', () => {
  it('Creates a comment using CREATE_COMMENT action in commentReducer', () => {
    const state = {
      comments: [],
    };

    const action = createComment(commentDummy);

    const newState = commentReducer(state, action);

    expect(newState).toEqual({
      comments: [commentDummy],
    });
  });

  it('Deletes a comment using DELETE_COMMENT action in commentReducer', () => {
    const state = {
      comments: [commentDummy],
    };

    const action = deleteComment(commentDummy.commentId);

    const newState = commentReducer(state, action);

    expect(newState).toEqual({
      comments: [],
    });
  });
});
