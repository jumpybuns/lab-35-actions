import React, { useState } from 'react';
import { createBlog } from '../actions/blogActions';
import { useDispatch } from '../state/BlogProvider';
import styles from './BlogForm.css';

const BlogForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createBlog({ title, body }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    dispatch(createBlog({ title, body }));
  };

  return (
    <>
      <h1 className={styles.title}>Create Post</h1>
      <form onSubmit={(handleSubmit, handleUpdate)}>
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
        <button className={styles.submit} onSubmit={handleUpdate}>
          Update
        </button>
      </form>
    </>
  );
};

export default BlogForm;
