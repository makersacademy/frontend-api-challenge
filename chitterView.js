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

    
    // this.postButtonEl.addEventListener('click', () => {
    //   this.api.postPosts(this.postInputEl.value, 853, (error) => {
    //     this.displayError(error);
    //   });
    //   this.api.loadPosts(note => {
    //     console.log(note);
    //   });
    //   model.addPost(this.postInputEl.value)
    //   this.displayPosts();
    // });

  }

  displayPosts() {
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
    document.querySelectorAll('.like-button').forEach(post => {
      post.remove();
    });
    document.querySelectorAll('.likes').forEach(post => {
      post.remove();
    });
    const posts = this.model.getPosts()
    posts.forEach(post => {
      const postEl = document.createElement('div');
      const dateEl = document.createElement('div');
      const handleEl = document.createElement('div');
      const likesEl = document.createElement('div');
      const likeButtonEl = document.createElement('button')
      const deletePeepEl =  document.createElement('button')
      postEl.innerText = post.body;
      postEl.className = ('post');
      dateEl.innerText = post.created_at;
      dateEl.className = ('date');
      handleEl.innerText = `posted by: ${post.user.handle}`;
      handleEl.className = ('handle');
      likesEl.innerText = `likes: ${post.likes}`;
      likesEl.className = ('likes');
      likeButtonEl.innerText = "like"
      likeButtonEl.className = "like-button";
      deletePeepEl.innerText = "delete";
      deletePeepEl.className = "delete-peep-button";
      this.mainContainerEl.append(postEl, dateEl, handleEl, likesEl, likeButtonEl, deletePeepEl);
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

}

module.exports = ChitterView