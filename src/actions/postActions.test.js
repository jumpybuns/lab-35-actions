import {
  createBlog,
  CREATE_POST,
  deletePost,
  DELETE_POST,
} from './postActions';

describe('blog action jacksons', () => {
  it('creates a new blog post', () => {
    const action = createBlog({
      title: 'title',
      body: 'body',
    });

    expect(action).toEqual({
      type: CREATE_POST,
      payload: { title: 'title', body: 'body' },
    });
  });

  it('deletes a blog post', () => {
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
