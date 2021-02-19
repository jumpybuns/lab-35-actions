import React from 'react';
import { useSelector } from 'react-redux';
import { getPosts } from '../selectors/postSelectors';
import Post from './Post';

const PostList = () => {
  const posts = useSelector(getPosts);

  const postElements = posts.map((post, index) => (
    <li key={index}>
      <Post {...post} />
    </li>
  ));

  return <ul data-testid="posts">{postElements}</ul>;
};

export default PostList;
