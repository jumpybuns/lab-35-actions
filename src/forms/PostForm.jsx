import React, { useState } from 'react';
import { createPost } from '../actions/postActions';
import { useDispatch, useSelector } from 'react-redux';
import { getPostId } from '../selectors/postSelectors';
import styles from './PostForm.css';

const PostForm = () => {
  const dispatch = useDispatch();
  const postId = useSelector(getPostId);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ title, body, postId }));
    setTitle('');
    setBody('');
  };

  return (
    <>
      <h1 className={styles.title}>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />

        <textarea
          className={styles.textarea}
          type="text"
          placeholder="Body"
          value={body}
          onChange={({ target }) => setBody(target.value)}
        ></textarea>
        <button className={styles.submit} onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default PostForm;
