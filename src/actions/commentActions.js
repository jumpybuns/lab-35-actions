export const SET_COMMENT = 'SET_COMMENT';
export const setComment = (index, comment) => ({
  type: SET_COMMENT,
  payload: { index, comment },
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = (index, commentIndex) => ({
  type: DELETE_COMMENT,
  payload: { index, commentIndex },
});
