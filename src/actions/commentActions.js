export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = (comment) => ({
  type: CREATE_COMMENT,
  payload: comment,
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = (id) => ({
  type: DELETE_COMMENT,
  payload: id,
});
