import {
  createBlog,
  CREATE_BLOG,
  deleteBlog,
  DELETE_BLOG,
  setComment,
  SET_COMMENT,
} from './blogActions';

describe('blog action jacksons', () => {
  it('creates a new blog post', () => {
    const action = createBlog({
      title: 'title',
      body: 'body',
    });

    expect(action).toEqual({
      type: CREATE_BLOG,
      payload: { title: 'title', body: 'body' },
    });
  });

  it('deletes a blog post', () => {
    const action2 = deleteBlog({
      title: 'title',
      body: 'body',
    });

    expect(action2).toEqual({
      type: DELETE_BLOG,
      payload: { title: 'title', body: 'body' },
    });
  });

  it('creates a comment using SET_COMMENT', () => {
    const action = setComment(0, 'comment');

    expect(action).toEqual({
      type: SET_COMMENT,
      payload: { index: 0, comment: 'comment' },
    });
  });
});
