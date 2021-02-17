import React from 'react';
import PropTypes from 'prop-types';

const Blog = ({ title, body }) => {
  return (
    <dl>
      <dt>Title</dt>
      <dd>{title}</dd>

      <dt>Body</dt>
      <dd>{body}</dd>
    </dl>
  );
};

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Blog;
