export const getPosts = (state) => state.posts.posts;
export const countPosts = (state) =>
  getPosts(state).map((post) => ({
    title: post.title,
    body: post.body,
    comments: post.comment,
  }));
