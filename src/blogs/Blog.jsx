import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBlog } from '../actions/blogActions';
import CommentForm from '../forms/CommentForm';
import { createComment } from '../actions/commentActions';

const Blog = ({ title, body, comments, index }) => {
  const dispatch = useDispatch();
  const [selectedComment, setSelectedComment] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createComment(index, selectedComment));
  };

  const handleClick = (e) => {
    e.preventDefault();

    dispatch(deleteBlog(title));
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>{title}</h1>
      <h2>{body}</h2>
      {comments.map((comment) => (
        <>
          <input
            id={comments}
            name="comments"
            type="text"
            value={comments}
            onChange={({ target }) => setSelectedComment(target.value)}
          />
          <label htmlFor={comment}>{comment}</label>
        </>
      ))}
      <CommentForm />
      <button onSubmit={handleSubmit}>Submit</button>
      <button onClick={handleClick}>Delete</button>
    </form>
  );
};

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  index: PropTypes.number.isRequired,
};

export default Blog;
