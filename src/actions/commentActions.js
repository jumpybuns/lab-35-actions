export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = (postIndex, commentText) => ({
  type: CREATE_COMMENT,
  payload: { postIndex, commentText },
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = (postIndex, textIndex) => ({
  type: DELETE_COMMENT,
  payload: { postIndex, textIndex },
});
