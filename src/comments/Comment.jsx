import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from '../state/CommentProvider';
import { deleteComment } from '../actions/commentActions';

const Comment = ({ index, comment }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteComment(index));
  };

  return (
    <>
      <dl>
        <dd>{comment}</dd>
      </dl>

      <button onClick={handleClick}>Delete</button>
    </>
  );
};

Comment.propTypes = {
  index: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
};

export default Comment;
