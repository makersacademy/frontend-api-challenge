/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const PostsView = require('./postsView');
const Posts = require('./postsModel');
const ChitterAPI = require('./chitterAPI');

require('jest-fetch-mock').enableMocks();

let api;
let posts;
let view;

describe('View Page', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    doublePost = { body: () => 'Test Post' }
    api = new ChitterAPI();
    posts = new Posts();
    view = new PostsView(posts, api);
  })
  
  describe('Posts visible on main page', () => {
    it('displays 2 posts', () => {
      posts.addPost(doublePost);
      posts.addPost(doublePost);
  
      view.displayPosts();
  
      expect(document.querySelectorAll('div.post').length).toEqual(2);
    })

    it('adds a new post on the page', (done) => {
      const input = document.querySelector('#input-new-post');
      const button = document.querySelector('#add-new-post');

      fetch.mockResponseOnce(JSON.stringify({
        user_id: 1,
        body: "Test Peep"
      }));

      input.value = 'Test Peep';

      button.click();

      setTimeout(() => {
        try{
          expect(document.querySelectorAll('div.post').length).toEqual(1);
          expect(document.querySelectorAll('div.post')[0].innerText).toEqual('Test Peep');
          done();
        } catch(error) {
          done(error);
        }
      })

      
    })
  })

  describe('Handling users', () => {
    it('can login', (done) => {
      const user = document.querySelector('#input-username');
      const password = document.querySelector('#input-password');
      const button = document.querySelector('#submit-login');

      fetch.mockResponseOnce(JSON.stringify({
        user_id: "kay",
        session_key: "_2a_12_xEDGliaNo_fl7bJHCCWopu"
      }))

      //Sample given in the api
      user.value = 'kay';
      password.value = 'mypassword';
      button.click();

      setTimeout(() => {
        try{
          expect(view.user_id).not.toBeNull();
          expect(view.session_key).not.toBeNull();
          done();
        } catch(error) {
          done(error);
        }
      })
      
    })
  })

})
