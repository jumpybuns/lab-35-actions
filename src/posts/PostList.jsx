import React from 'react';
import { useSelector } from 'react-redux';
import { getPosts } from '../selectors/postSelectors';
import Post from './Post';

const PostList = () => {
  const posts = useSelector(getPosts);

  const postElements = posts.map((post, i) => (
    <li key={post.title}>
      <Post {...post} index={i} />
    </li>
  ));

  return <ul data-testid="posts">{postElements}</ul>;
};

export default PostList;
