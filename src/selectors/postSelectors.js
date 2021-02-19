export const getPosts = (state) => state.posts.posts;
export const countPosts = (state) =>
  getPosts(state).map((blog) => ({
    title: blog.title,
    comments: blog.comment,
  }));
