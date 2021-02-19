import { getBlogs } from './blogSelectors';

export const getComments = (state) => state.list;
export const countComments = (state) => {
  const blogs = getBlogs(state);
  const comments = getComments(state);

  return comments.filter((comment, i) => blogs[i]?.correctComment === comment)
    .length;
};
