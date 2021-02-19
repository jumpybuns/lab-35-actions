import React from 'react';
import CommentForm from '../../forms/CommentForm';
import PostForm from '../../forms/PostForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(routerProps) => <PostForm {...routerProps} />}
          />
          <Route
            path="/post/:id"
            render={(routerProps) => <CommentForm {...routerProps} />}
          />
        </Switch>
      </Router>
    </>
  );
}
