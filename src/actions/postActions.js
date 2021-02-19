export const CREATE_POST = 'CREATE_POST';
export const createPost = (post) => ({
  type: CREATE_POST,
  payload: post,
});

export const DELETE_POST = 'DELETE_POST';
export const deletePost = (title) => ({
  type: DELETE_POST,
  payload: title,
});

export const UPDATE_POST = 'UPDATE_POST';
export const updatePost = (title) => ({
  type: UPDATE_POST,
  payload: title,
});
