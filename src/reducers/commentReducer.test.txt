import { createPost, deletePost } from '../actions/postActions';
import postReducer from './postReducer';

describe('Post Reducer', () => {
  it('Creates a post using CREATE_POST action in postReducer', () => {
    const state = {
      posts: [],
    };

    const action = createPost({
      title: 'title',
      body: 'body',
    });

    const newState = postReducer(state, action);

    expect(newState).toEqual({
      posts: [
        {
          title: 'title',
          body: 'body',
        },
      ],
    });
  });

  it('Deletes a post using DELETE_POST action in postReducer', () => {
    const state = {
      posts: [
        {
          title: 'title',
          body: 'body',
        },
      ],
    };

    const action = deletePost('Wednesday Post');

    const newState = postReducer(state, action);

    expect(newState).toEqual({
      posts: [],
    });
  });
});
