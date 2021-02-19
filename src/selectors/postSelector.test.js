import { getPosts } from './postSelectors';

describe('Blog Selectors', () => {
  it('Selects all posts a post selector', () => {
    const state = {
      posts: [
        {
          title: 'Wednesday Post',
          body: 'Dear Diary, today is Wednesday.',
        },
        {
          title: 'Tuesday Post',
          body: 'Dear Diary, yesterday was Tuesday.',
        },
      ],
    };

    const posts = getPosts(state);

    expect(posts).toEqual([
      {
        title: 'Wednesday Post',
        body: 'Dear Diary, today is Wednesday.',
      },
      {
        title: 'Tuesday Post',
        body: 'Dear Diary, yesterday was Tuesday.',
      },
    ]);
  });
});
