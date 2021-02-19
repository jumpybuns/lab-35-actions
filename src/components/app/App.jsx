import React from 'react';
import CommentPage from '../../pages/CommentPage';
import PostPage from '../../pages/PostPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(routerProps) => <PostPage {...routerProps} />}
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
