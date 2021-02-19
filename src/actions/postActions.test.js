import {
  createPost,
  CREATE_POST,
  deletePost,
  DELETE_POST,
} from './postActions';

describe('post blog action jacksons', () => {
  it('creates a new post blog', () => {
    const action = createPost({
      title: 'title',
      body: 'body',
    });

    expect(action).toEqual({
      type: CREATE_POST,
      payload: { title: 'title', body: 'body' },
    });
  });

  it('deletes a post blog', () => {
    const action2 = deletePost({
      title: 'title',
      body: 'body',
    });

    expect(action2).toEqual({
      type: DELETE_POST,
      payload: { title: 'title', body: 'body' },
    });
  });
});
