import React from 'react';
import CommentPage from '../../pages/CommentPage';
import PostPage from '../../pages/PostPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../../header/Header';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={(routerProps) => <PostPage {...routerProps} />}
          />
          <Route
            path="/post/:id"
            render={(routerProps) => <CommentPage {...routerProps} />}
          />
        </Switch>
      </Router>
    </>
  );
}
