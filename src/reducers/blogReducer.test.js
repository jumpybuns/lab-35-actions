import { createBlog, deleteBlog, updateBlog } from '../actions/blogActions';
import reducer from '../reducers/blogReducer';

describe('blog reducer test', () => {
  it('add a blog with CREATE_BLOG action', () => {
    const state = {
      blogs: [],
    };

    const action = createBlog({
      title: 'title',
      body: 'body',
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      blogs: [{ title: 'title', body: 'body' }],
    });
  });

  it('deletes a blog with DELETE_BLOG action', () => {
    const state = {
      blogs: [{ title: 'title', body: 'body' }],
    };

    const action = deleteBlog('title');

    expect(reducer(state, action)).toEqual({
      blogs: [],
    });
  });

  it('updates a blog with UPDATE_BLOG action', () => {
    const state = {
      blogs: [{ title: 'title', body: 'body' }],
    };

    const action = updateBlog('index');

    expect(action);
  });
});
