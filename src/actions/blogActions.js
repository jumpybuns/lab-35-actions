export const CREATE_BLOG = 'CREATE_BLOG';
export const createBlog = (blog) => ({
  type: CREATE_BLOG,
  payload: blog,
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

export const SET_COMMENT = 'SET_COMMENT';
export const setComment = (index, comment) => ({
  type: SET_COMMENT,
  payload: { index, comment },
});
