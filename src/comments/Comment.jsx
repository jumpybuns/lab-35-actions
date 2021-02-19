import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from '../actions/commentActions';
import { setComment } from '../actions/commentActions';
import { getComments } from '../selectors/commentSelector';

const Comment = ({ index, comment }) => {
  const dispatch = useDispatch();
  const [selectComment, setSelectComment] = useState('');
  const allComments = useSelector(getComments);
  const handleClick = () => {
    dispatch(deleteComment(index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setComment(index, selectComment));
  };

  return (
    <form onSubmit={handleSubmit}>
      <>
        <dl>
          <dd>{comment}</dd>
        </dl>
        <button onSubmit={handleSubmit}>Submit</button>
        <button onClick={handleClick}>Delete</button>
      </>
    </form>
  );
};

Comment.propTypes = {
  index: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
};

export default Comment;
