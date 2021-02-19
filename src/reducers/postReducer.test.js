import reducer from '.';
import { createComment, deleteComment } from '../actions/commentActions';

describe('Comment Reducer', () => {
  it('Creates a comment using CREATE_COMMENT action in commentReducer', () => {
    const state = {
      posts: [
        {
          title: 'Thursday',
          body: 'Today is Thursday',
        },
      ],
    };

    const action = createComment(0, 'This is my comment');

    const newState = reducer(state, action);

    expect(newState).toEqual({
      posts: [
        {
          title: 'Thursday',
          body: 'Today is Thursday',
        },
      ],
      comments: { 0: ['This is my comment'] },
    });
  });

  // eslint-disable-next-line max-len
  it.only('Deletes a comment using DELETE_COMMENT action in commentReducer', () => {
    const state = {
      posts: [
        {
          title: 'Friday',
          body: 'Tomorrow is Friday',
        },
      ],
      comments: { 0: ['This is my Friday comment'] },
    };

    const action = deleteComment(0, 0);
    // { type: 'DELETE_COMMENT', payload: { postIndex: 0, textIndex: 0 } }

    const newState = reducer(state, action);

    expect(newState).toEqual({
      posts: [
        {
          title: 'Friday',
          body: 'Tomorrow is Friday',
        },
      ],
      comments: { 0: [] },
    });
  });
});
