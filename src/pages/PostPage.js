import React from 'react';
import PostList from '../posts/PostList';
import PostForm from '../forms/PostForm';

export default function PostPage() {
  return (
    <>
      <PostForm />
      <PostList />
    </>
  );
}
