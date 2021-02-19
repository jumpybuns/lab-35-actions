import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../actions/postActions';

const Post = ({ title, body }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    dispatch(deletePost(title));
  };

  return (
    <>
      <h1>{title}</h1>
      <h2>{body}</h2>
      <button onClick={handleClick}>Delete</button>
    </>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
