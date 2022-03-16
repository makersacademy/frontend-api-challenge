const ChitterModel = require('./chitterModel')
const ChitterApi = require('./chitterApi')

class ChitterView {
  constructor (model, api) {
    this.model = model
    this.api = api
    this.sessionKey = null
    this.userId = null
    this.signinButtonEl = document.querySelector('#submit-user-button')
    this.signinUsernameEl = document.querySelector('#username-input')
    this.signinPasswordEl = document.querySelector('#password-input')
    this.mainContainerEl = document.querySelector('#main-container')
    this.postInputEl = document.querySelector('#post-input')
    this.postButtonEl = document.querySelector('#post-button')
    this.signupUsernameEl = document.querySelector('#username-input-signup')
    this.signupPasswordEl = document.querySelector('#password-input-signup')
    this.signupButtonEl = document.querySelector('#sign-up-submit-button')
    this.signoutButtonEl = document.querySelector('#sign-out-button')

    this.postButtonEl.addEventListener('click', () => {
      this.api.postPeeps(this.postInputEl.value, this.userId, this.sessionKey, (posts =>{
        this.api.loadPosts((posts) => {
          model.setPosts(posts)
          this.displayPosts(posts)
         })
      }))
    });
    this.mainContainerEl.addEventListener('click', (event) => {
      const deleteButtonEl = event.target.closest('button.delete-button')
      if (deleteButtonEl) {
        const peepId = deleteButtonEl.closest('div.inner-peep').id
        this.api.deleteIndividualPost(peepId, this.sessionKey)
      }
      this.api.loadPosts((posts) => {
        model.setPosts(posts)
        this.displayPosts(posts)
      })
    })
    this.mainContainerEl.addEventListener('click', (event) => {
      const likeButtonEl = event.target.closest('button.like-button')
      if (likeButtonEl) {
        const peepId = likeButtonEl.closest('div.inner-peep').id
        this.api.likePost(peepId, this.userId, this.sessionKey)
        likeButtonEl.disabled = true
      }
      this.api.loadPosts((posts) => {
        model.setPosts(posts)
        this.displayPosts(posts)
      })
    })
    this.mainContainerEl.addEventListener('click', (event) => {
      const unlikeButtonEl = event.target.closest('button.unlike-button')
      if (unlikeButtonEl) {
        const peepId = unlikeButtonEl.closest('div.inner-peep').id
        this.api.dislikePost(peepId, this.userId, this.sessionKey)
        unlikeButtonEl.disabled = true
      }
      this.api.loadPosts((posts) => {
        model.setPosts(posts)
        this.displayPosts(posts)
      })
    })

    this.signupButtonEl.addEventListener('click', () => {
      this.api.postUserInfo(this.signupUsernameEl.value, this.signupPasswordEl.value)
      this.signupUsernameEl.value = ''
      this.signupPasswordEl.value = ''
    })

    this.signinButtonEl.addEventListener('click', () => {
      this.api.createSession(this.signinUsernameEl.value, this.signinPasswordEl.value, (data) => {
        this.setSessions(data)
        console.log(this.userId)
        console.log(this.sessionKey)
      })
      document.querySelector('#user-name').innerText = `hello ${this.signinUsernameEl.value}`
      this.signinUsernameEl.value = ''
      this.signinPasswordEl.value = ''
    })

    this.signoutButtonEl.addEventListener('click', () => {
      document.querySelector('#user-name').innerText = 'goodbye'
      this.sessionKey = null
      this.userId = null
      setTimeout(function () {
        document.getElementById('user-name').innerText = ''
      }, 1500)
    })
  }

  displayPosts () {
    this.clearPeeps()
    const posts = this.model.getPosts()
    posts.forEach(post => {
      this.createPeep(post)
    })
    this.postInputEl.value = ''
  }

  displayError (error) {
    document.querySelectorAll('#error-message').forEach(error => {
      error.remove()
    })
    const ErrorEl = document.createElement('div')
    ErrorEl.innerText = error
    ErrorEl.setAttribute('id', 'error-message')
    this.mainContainerEl.append(ErrorEl)
  }

  setSessions (data) {
    this.sessionKey = data.session_key
    this.userId = data.user_id
  }

  displayPeep (post) {
    this.clearPeeps()
    this.createPeep(post)
  }

  clearPeeps () {
    document.querySelectorAll('.posts').forEach(post => {
      post.remove()
    })
  }

  createPeep (data) {
    const individualPeepEl = document.createElement('div')
    individualPeepEl.className = 'posts'
    individualPeepEl.innerHTML = this.makePeep(data)
    document.querySelector('#main-container').appendChild(individualPeepEl)
  }

  makePeep (data) {
    return `<div id="${data.id}" class="inner-peep">
            <a href="#${data.id}" class="peep-body">${data.body}</a>
            <div class="info">
              <h6 class="handle">${data.user.handle}</h6>
              <h6 class="date">${data.updated_at.slice(0, 10)}</h6>
              <h6 class="likes">Likes: ${data.likes.length}</h6>
            </div>
            <button class="like-button">like</button>
            <button class="unlike-button">unlike</button>
            <button class="delete-button">delete</button>
            </div>`
  }
}

module.exports = ChitterView
