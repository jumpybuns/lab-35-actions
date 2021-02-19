import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../actions/commentActions';

const Comment = ({ text, commentId }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteComment(commentId));
  };

  return (
    <>
      <dl>
        <dd>{text}</dd>
      </dl>
      <button onClick={handleClick}>Delete</button>
    </>
  );
};

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  commentId: PropTypes.number.isRequired,
};

export default Comment;
