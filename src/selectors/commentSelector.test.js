import { getComments } from './commentSelector';

const dummyPost = {
  postId: 1,
  commentId: 1,
  comment: 'body',
};

describe('Blog Selectors', () => {
  it('Selects all comments ', () => {
    const state = {
      comments: {
        comments: [dummyPost],
      },
    };

    const comments = getComments(state);

    expect(comments).toEqual([dummyPost]);
  });
});
