import { getPosts } from './postSelectors';

export const getComments = (state) => state.comments.commentsList;
export const countComments = (state) => {
  const posts = getPosts(state);
  const comments = getComments(state);

  return comments.filter((comment, i) => posts[i]?.correctComment === comment)
    .length;
};
