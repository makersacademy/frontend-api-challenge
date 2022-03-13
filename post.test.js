const Post = require('./post')

describe('Post', () => {
  it('has details', () => {
    const post = new Post('test');
    expect(post.body).toEqual('test');

  })

})
