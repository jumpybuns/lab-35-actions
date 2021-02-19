import React from 'react';
import { useSelector } from 'react-redux';
import { countPosts } from '../selectors/postSelectors';
import Post from './Post';

const PostList = () => {
  const posts = useSelector(countPosts);

  const postElements = posts.map((post, i) => (
    <li key={post.title}>
      <Post {...post} index={i} />
    </li>
  ));

  return <ul data-testid="posts">{postElements}</ul>;
};

export default PostList;
