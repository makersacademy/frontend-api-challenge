const Posts = require('./postsModel');

let posts;

describe('Posts', () => {
  beforeEach(() => {
    postDouble = { body: () => 'Test Post'}
    posts = new Posts();
  })

  describe('getPosts', () => {
    it('initially there are no posts in the model', () => {
      expect(posts.getPosts()).toEqual([]);
    })

    it('should return multiple posts', () => {
      posts.addPost(postDouble);
      posts.addPost(postDouble);
      expect(posts.getPosts()).toEqual([postDouble, postDouble]);
    })

  })

  describe('addPost', () => {
    it('adds a post to the model', () => {
      posts.addPost(postDouble);
      expect(posts.getPosts()).toEqual([postDouble]);
    })
  })


})
