/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const PostsView = require('./postsView');
const Posts = require('./postsModel');

let posts;
let view;

describe('View Page', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    posts = new Posts(); 
    view = new PostsView(posts);
  })
  
  describe('Posts visible on main page', () => {
    it('displays 2 posts', () => {
      posts.addPost('Peep');
      posts.addPost('Peep2');
  
      view.displayPosts();
  
      expect(document.querySelectorAll('div.post').length).toEqual(2);
    })
  })
})
