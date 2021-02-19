import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../actions/postActions';
import { createComment } from '../actions/commentActions';

const Post = ({ title, body, comments, index }) => {
  const dispatch = useDispatch();
  const [selectedComment, setSelectedComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createComment(index, selectedComment));
  };

  const handleClick = (e) => {
    e.preventDefault();

    dispatch(deletePost(title));
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{title}</p>
      {comments.map((comment) => (
        <>
          <input
            id={comments}
            name="comments"
            type="text"
            value={comment}
            onChange={({ target }) => setSelectedComment(target.value)}
          />
          <h1>{title}</h1>
          <h2>{body}</h2>
          <button onClick={handleClick}>Delete</button>
          <label htmlFor={comment}>{comment}</label>
        </>
      ))}
    </form>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  index: PropTypes.number.isRequired,
};

export default Post;
