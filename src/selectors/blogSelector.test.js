import { getBlogs, countBlogs } from './blogSelectors';

describe('test selectors', () => {
  it('gets blogs from state', () => {
    const state = {
      blogs: [{ title: 'title', body: 'body' }],
    };

    const selector = getBlogs(state);

    expect(selector).toEqual([{ title: 'title', body: 'body' }]);
  });

  it('counts blog from state', () => {
    const state = {
      blogs: [{ title: 'title', body: 'body' }],
    };

    const selector = countBlogs(state);

    expect(selector).toEqual(1);
  });
});
