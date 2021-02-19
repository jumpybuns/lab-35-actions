import React from 'react';
import { useSelector } from 'react-redux';
import { countBlogs } from '../selectors/blogSelectors';
import Blog from './Blog';

const BlogList = () => {
  const blogs = useSelector(countBlogs);

  const blogElements = blogs.map((blog, i) => (
    <li key={blog.title}>
      <Blog {...blog} index={i} />
    </li>
  ));

  return <ul data-testid="blogs">{blogElements}</ul>;
};

export default BlogList;
