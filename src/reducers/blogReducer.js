import { CREATE_BLOG, DELETE_BLOG, UPDATE_BLOG } from '../actions/blogActions';

export const initialState = {
  blogs: [],
  updatedBlogs: [],
};

export default function reducer(state, action) {
  const { blogs, updatedBlogs } = state;
  switch (action.type) {
    case CREATE_BLOG:
      return {
        ...state,
        blogs: [...blogs, action.payload],
      };
    case DELETE_BLOG:
      return {
        ...state,
        blogs: blogs.filter((blog) => blog.title !== action.payload),
      };
    case UPDATE_BLOG:
      return {
        ...state,
        blogs: [...blogs, action.payload],
        updatedBlogs: updatedBlogs.filter(
          (blog) => blog.title == action.payload
        ),
      };
    default:
      return state;
  }
}
