const ChitterModel = require('./chitterModel')
const ChitterApi = require('./chitterApi')
const model = new ChitterModel;
const api = new ChitterApi;

class ChitterView {
  constructor(model, api) {
    this.model = model;
    this.submitUserButtonEl = document.querySelector('#submit-user-button');
    this.deletePostsButtonEl = document.querySelector('#delete-posts-button');
    this.mainContainerEl = document.querySelector('#main-container');
    this.postInputEl = document.querySelector('#user-input')
    this.postButtonEl = document.querySelector('#post-button')

    this.postButtonEl.addEventListener('click', () => {
      model.addPost(this.postInputEl.value)
      this.displayPosts()
    })

  }

  displayPosts() {
    document.querySelectorAll('.post').forEach(post => {
      post.remove();
    });
    const posts = this.model.getPosts()
    posts.forEach(post => {
      const postEl = document.createElement('div');
      postEl.innerText = post;
      postEl.className = ('post');
      this.mainContainerEl.append(postEl);
    })
    this.postInputEl.value = ''
  }

}

module.exports = ChitterView