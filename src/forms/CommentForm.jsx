import React, { useState } from 'react';
import { createComment } from '../actions/commentActions';
import { useDispatch } from 'react-redux';

const CommentForm = () => {
  const dispatch = useDispatch();

  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createComment({ comment }));
  };

  return (
    <>
      <h3>Comments</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          placeholder="Comment"
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        ></textarea>
        <button onSubmit={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default CommentForm;
