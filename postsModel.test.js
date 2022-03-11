const Posts = require('./postsModel');

let posts;

describe('Posts', () => {
  beforeEach(() => {
    posts = new Posts();
  })
  describe('getPosts', () => {
    it('initially there are no notes in the model', () => {
      expect(posts.getNotes()).toEqual([]);
    })

  })
})
