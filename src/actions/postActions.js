export const CREATE_BLOG = 'CREATE_BLOG';
export const createPost = (blog) => ({
  type: CREATE_BLOG,
  payload: blog,
});

export const DELETE_BLOG = 'DELETE_BLOG';
export const deleteblog = (title) => ({
  type: DELETE_BLOG,
  payload: title,
});
