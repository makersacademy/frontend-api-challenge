const Post = require('./post')

describe('Post', () => {
  it('details of post', () => {
    const post = new Post('test');
    expect(post.body).toEqual('test');
  })
})