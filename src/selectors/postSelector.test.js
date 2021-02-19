import { getPosts, countPosts } from './postSelectors';

const dummyPost = {
  postId: 1,
  title: 'title Post',
  body: 'body',
};

describe('Blog Selectors', () => {
  it('Selects all posts ', () => {
    const state = {
      posts: {
        posts: [dummyPost],
      },
    };

    const posts = getPosts(state);

    expect(posts).toEqual([dummyPost]);
  });

  it('Counts posts by Id from state', () => {
    const state = {
      posts: {
        posts: [dummyPost],
      },
    };

    expect(countPosts(state)).toEqual(1);
  });
});
