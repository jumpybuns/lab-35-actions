import React from 'react';
import { useSelector } from 'react-redux';
import { getComments } from '../selectors/commentSelector';
import Comment from './Comment';

const CommentList = ({ postId }) => {
  const allComments = useSelector(getComments);

  const displayComments = allComments.filter(
    (comment) => comment.postId === postId
  );

  const commentElements = displayComments.map((comment, index) => (
    <li key={index}>
      <Comment {...comment} />
    </li>
  ));

  return <ul data-testid="comments">{commentElements}</ul>;
};

export default CommentList;
