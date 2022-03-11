const ChitterModel = require('./chitterModel')
const ChitterApi = require('./chitterApi')
const model = new ChitterModel;
const api = new ChitterApi;

class ChitterView {
  constructor(model, api) {
    this.model = model;
    this.sessionKey = null
    this.userId = null
    this.signinButtonEl = document.querySelector('#submit-user-button');
    this.signinUsernameEl = document.querySelector('#username-input');
    this.signinPasswordEl = document.querySelector('#password-input');
    this.deletePostsButtonEl = document.querySelector('#delete-posts-button');
    this.mainContainerEl = document.querySelector('#main-container');
    this.postInputEl = document.querySelector('#post-input')
    this.postButtonEl = document.querySelector('#post-button')
    this.signupUsernameEl = document.querySelector('#username-input-signup')
    this.signupPasswordEl = document.querySelector('#password-input-signup')
    this.signupButtonEl = document.querySelector('#sign-up-submit-button')
    this.signoutButtonEl = document.querySelector('#sign-out-button')
    this.api = api

    this.postButtonEl.addEventListener('click', () => {
      this.api.postPeeps(this.postInputEl.value, this.userId, this.sessionKey);
      this.api.loadPosts((posts) => {
        model.setPosts(posts);
        this.displayPosts();
      });
    })

    this.deletePostsButtonEl.addEventListener('click', () => {
      this.api.deletePost();
      this.deletePostsView();
    });

    this.signupButtonEl.addEventListener('click', () => {
      this.api.postUserInfo(this.signupUsernameEl.value, this.signupPasswordEl.value);
      this.signupUsernameEl.value = '';
      this.signupPasswordEl.value = '';
    })

    this.signinButtonEl.addEventListener('click', () => {
      this.api.createSession(this.signinUsernameEl.value, this.signinPasswordEl.value, (data) => {
        this.setSessions(data)
        console.log(this.userId)
        console.log(this.sessionKey)
        this.signinUsernameEl.value = '';
        this.signinPasswordEl.value = '';
      })
    })

    this.signoutButtonEl.addEventListener('click', () => {
      this.sessionKey = null
      this.userId = null
      console.log(this.sessionKey)
    })

    this.viewButtonEl.addEventListener('click', () => {
      this.sessionKey = null
      this.userId = null
      console.log(this.sessionKey)
    })
  }
 
  displayPosts() {
    this.clearPeeps()
    const posts = this.model.getPosts()
    posts.forEach(post => {
      this.createPeep(post);
    })
    this.postInputEl.value = ''
  }

  displayError(error) {
    document.querySelectorAll('#error-message').forEach(error => {
      error.remove();
    });
    const ErrorEl = document.createElement('div');
   ErrorEl.innerText = error;
   ErrorEl.setAttribute('id', 'error-message');
    this.mainContainerEl.append(ErrorEl);
  }

  deletePostsView() {
    document.querySelectorAll('.post').forEach(note => {
      post.remove();
    });
  }

  setSessions(data) {
    this.sessionKey = data.session_key;
    this.userId = data.user_id;
  }

  displayPeep(post) {
    this.clearPeeps();
    this.createPeep(post);
  }

  clearPeeps() {
    document.querySelectorAll('.post').forEach(post => {
      post.remove();
    });
    document.querySelectorAll('.likes').forEach(post => {
      post.remove();
    });
    document.querySelectorAll('.date').forEach(post => {
      post.remove();
    });
    document.querySelectorAll('.handle').forEach(post => {
      post.remove();
    });
    document.querySelectorAll('.delete-peep-button').forEach(post => {
      post.remove();
    });
    document.querySelectorAll('.view-button').forEach(post => {
      post.remove();
    });
    document.querySelectorAll('.likes').forEach(post => {
      post.remove();
    });
  }
  createPeep(post) {
    const postEl = document.createElement('div');
    const dateEl = document.createElement('div');
    const handleEl = document.createElement('div');
    // const likesEl = document.createElement('div');
    const viewButtonEl = document.createElement('button')
    // const deletePeepEl =  document.createElement('button')
    postEl.innerText = post.body;
    postEl.className = ('post');
    viewButtonEl.setAttribute("id", `${post.id}`)
    dateEl.innerText = post.created_at.slice(0, 10);
    dateEl.className = ('date');
    handleEl.innerText = `posted by: ${post.user.handle}`;
    handleEl.className = ('handle');
    // likesEl.innerText = `likes: ${post.likes}`;
    // likesEl.className = ('likes');
    viewButtonEl.innerText = "view"
    viewButtonEl.className = "view-button";
    // deletePeepEl.innerText = "delete";
    // deletePeepEl.className = "delete-peep-button";
    this.mainContainerEl.append(postEl, dateEl, handleEl, viewButtonEl);
  }
}

module.exports = ChitterView