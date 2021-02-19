export const CREATE_POST = 'CREATE_POST';
export const createBlog = (post) => ({
  type: CREATE_POST,
  payload: post,
});

export const DELETE_BLOG = 'DELETE_BLOG';
export const deleteBlog = (title) => ({
  type: DELETE_BLOG,
  payload: title,
});

export const UPDATE_BLOG = 'UPDATE_BLOG';
export const updateBlog = (title) => ({
  type: UPDATE_BLOG,
  payload: title,
});
