export const getComments = (state) => state.blogs;
export const countComments = (state) => getComments(state).length;
