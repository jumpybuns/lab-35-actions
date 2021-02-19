import postReducer from './postReducer';
import { createPost, deletePost } from '../actions/postActions';

const dummyPost = {
  postId: 1,
  title: 'title',
  body: 'body',
};

describe('Post Reducer', () => {
  it('Creates a post using CREATE_POST action in postReducer', () => {
    const state = {
      posts: [],
    };

    const action = createPost(dummyPost);

    const newState = postReducer(state, action);

    expect(newState).toEqual({
      posts: [dummyPost],
    });
  });
  // eslint-disable-next-line max-len
  it('Deletes a post using DELETE_POST action in postReducer', () => {
    const state = {
      posts: [dummyPost],
    };

    const action = deletePost(dummyPost.title);

    const newState = postReducer(state, action);

    expect(newState).toEqual({ posts: [] });
  });
});
