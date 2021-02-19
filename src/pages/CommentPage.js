import React from 'react';
import Post from '../posts/Post';
import CommentForm from '../forms/CommentForm';
import CommentList from '../comments/CommentList';
import { getPosts } from '../selectors/postSelectors';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export default function CommentPage(props) {
  const postId = Number(props.match.params.id);

  const allPosts = useSelector(getPosts);

  const displayPost = allPosts.filter((post) => post.postId === postId);

  return (
    <>
      <Post {...displayPost[0]} />
      <CommentForm postId={postId} />
      <CommentList psotId={postId} />
    </>
  );
}

CommentPage.propTypes = {
  match: PropTypes.object.isRequired,
};
