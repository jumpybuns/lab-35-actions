import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../actions/postActions';

const Post = ({ title, body, postId }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    dispatch(deletePost(postId));
  };

  return (
    <>
      <dl>
        <dt>{title}</dt>
        <dd>{body}</dd>
        <button onClick={handleClick}>Delete</button>
      </dl>
    </>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  postId: PropTypes.number.isRequired,
};

export default Post;
