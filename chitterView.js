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
        this.displayPosts(posts);
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

    // this.viewButtonEl.addEventListener('click', () => {
    //   this.sessionKey = null
    //   this.userId = null
    //   console.log(this.sessionKey)
    // })
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
    document.querySelectorAll('.posts').forEach(post => {
      post.remove();
    });
   
  }
  createPeep(data) {
    const link = document.createElement('a');
    link.href = `#${data.id}`;
    const div = document.createElement('div');
    div.className = 'posts';
    div.innerHTML =  (`<div class="inner-peep-div">
                        <h3 class="peep-body">${data.body}</h3>
                        <h6 class="peep-name">${data.user.handle}</h6>
                        <h6 class="peep-time">${data.updated_at}</h6>
                        <h6 class="peep-likes">Likes: ${data.likes.length}</h6>
                        </div>`
                        );
    link.appendChild(div);
    document.querySelector('#main-container').appendChild(link);
  }
}

module.exports = ChitterView