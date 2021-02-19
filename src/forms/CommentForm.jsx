import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createComment } from '../actions/commentActions';
import { getCommentId } from '../selectors/commentSelector';
import { useDispatch, useSelector } from 'react-redux';

const CommentForm = ({ postId }) => {
  const dispatch = useDispatch();
  const commentId = useSelector(getCommentId);

  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createComment({ text, postId, commentId }));
  };

  return (
    <>
      <h3>Comments</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          placeholder="Comment"
          value={text}
          onChange={({ target }) => setText(target.value)}
        ></textarea>
        <button onSubmit={handleSubmit}>Create Comment</button>
      </form>
    </>
  );
};

CommentForm.propTypes = {
  postId: PropTypes.number.isRequired,
};

export default CommentForm;
