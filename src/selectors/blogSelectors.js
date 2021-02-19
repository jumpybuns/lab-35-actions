export const getBlogs = (state) => state.blogs.blogs;
export const countBlogs = (state) =>
  getBlogs(state).map((blog) => ({
    title: blog.title,
    comments: blog.comment,
  }));
