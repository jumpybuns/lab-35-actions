import { CREATE_BLOG, DELETE_BLOG, UPDATE_BLOG } from '../actions/blogActions';

export const initialState = {
  blogs: [],
  updatedBlogs: [],
};

export default function reducer(state, action) {
  switch (action.type) {
    case CREATE_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog.title !== action.payload),
      };
    case UPDATE_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
        updatedBlogs: state.blogs.filter(
          (blog) => blog.title == action.payload
        ),
      };
    default:
      return state;
  }
}
