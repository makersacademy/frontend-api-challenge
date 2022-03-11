const Posts = require('./postsModel');

let posts;

describe('Posts', () => {
  beforeEach(() => {
    posts = new Posts();
  })

  describe('getPosts', () => {
    it('initially there are no posts in the model', () => {
      expect(posts.getPosts()).toEqual([]);
    })

    it('should return multiple posts', () => {
      posts.addPost('Test Post');
      posts.addPost('Test two');
      expect(posts.getPosts()).toEqual(['Test Post', 'Test two']);
    })

  })

  describe('addPost', () => {
    it('adds a post to the model', () => {
      posts.addPost('Test Post');
      expect(posts.getPosts()).toEqual(['Test Post']);
    })
  })


})
