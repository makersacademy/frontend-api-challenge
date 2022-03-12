(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // chitterModel.js
  var require_chitterModel = __commonJS({
    "chitterModel.js"(exports, module) {
      var ChitterModel2 = class {
        constructor() {
          this.posts = [];
        }
        getPosts() {
          return this.posts;
        }
        addPost(post2) {
          return this.posts.push(post2);
        }
        resetPosts() {
          return this.posts = [];
        }
        setPosts(posts) {
          return this.posts = posts;
        }
      };
      module.exports = ChitterModel2;
    }
  });

  // chitterApi.js
  var require_chitterApi = __commonJS({
    "chitterApi.js"(exports, module) {
      var ChitterApi2 = class {
        postUserInfo(username, password) {
          const correctBody = { user: { handle: `${username}`, password: `${password}` } };
          fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(correctBody)
          }).then((response) => response.json()).then((data) => {
            console.log("Success:", data);
          });
        }
        createSession(username, password, callback) {
          const correctBody = { session: { handle: `${username}`, password: `${password}` } };
          fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(correctBody)
          }).then((response) => response.json()).then((data) => {
            console.log("Success:", data);
            console.log(callback(data));
          });
        }
        loadPosts(callback) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((data) => console.log(callback(data)));
        }
        postPeeps(post2, userId, sessionKey) {
          const correctBody = { peep: { user_id: `${userId}`, body: `${post2}` } };
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
            method: "POST",
            headers: {
              "Authorization": `Token token=${sessionKey}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify(correctBody)
          }).then((response) => response.json()).then((data) => {
            console.log("Success:", data);
            console.log(data);
          });
        }
        getIndividualPeep(peepId, callback, errorFunction) {
          fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${peepId}`).then((response) => response.json()).then((data) => console.log(callback(data))).catch((error) => {
            errorFunction(error);
            console.log(`${error}`);
          });
        }
        deleteIndividualPost(peepId, sessionKey) {
          fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${peepId}`, {
            method: "DELETE",
            headers: {
              "Authorization": `Token token=${sessionKey}`
            }
          });
        }
        likePost(peepId, userId, sessionKey) {
          fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${peepId}/likes/${userId}`, {
            method: "PUT",
            headers: {
              "Authorization": `Token token=${sessionKey}`
            }
          }).then((response) => response.json()).then((data) => console.log(data));
        }
        dislikePost(peepId, userId, sessionKey) {
          fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${peepId}/likes/${userId}`, {
            method: "DELETE",
            headers: {
              "Authorization": `Token token=${sessionKey}`
            }
          });
        }
        deletePosts() {
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
            method: "DELETE"
          });
        }
      };
      module.exports = ChitterApi2;
    }
  });

  // chitterView.js
  var require_chitterView = __commonJS({
    "chitterView.js"(exports, module) {
      var ChitterModel2 = require_chitterModel();
      var ChitterApi2 = require_chitterApi();
      var model2 = new ChitterModel2();
      var api2 = new ChitterApi2();
      var ChitterView2 = class {
        constructor(model3, api3) {
          this.model = model3;
          this.api = api3;
          this.sessionKey = null;
          this.userId = null;
          this.signinButtonEl = document.querySelector("#submit-user-button");
          this.signinUsernameEl = document.querySelector("#username-input");
          this.signinPasswordEl = document.querySelector("#password-input");
          this.deletePostsButtonEl = document.querySelector("#delete-posts-button");
          this.mainContainerEl = document.querySelector("#main-container");
          this.postInputEl = document.querySelector("#post-input");
          this.postButtonEl = document.querySelector("#post-button");
          this.signupUsernameEl = document.querySelector("#username-input-signup");
          this.signupPasswordEl = document.querySelector("#password-input-signup");
          this.signupButtonEl = document.querySelector("#sign-up-submit-button");
          this.signoutButtonEl = document.querySelector("#sign-out-button");
          this.postButtonEl.addEventListener("click", () => {
            this.api.postPeeps(this.postInputEl.value, this.userId, this.sessionKey);
            this.api.loadPosts((posts) => {
              model3.setPosts(posts);
              this.displayPosts(posts);
            });
          });
          this.mainContainerEl.addEventListener("click", (event) => {
            const deleteButtonEl = event.target.closest("button.delete-button");
            if (deleteButtonEl) {
              const peepId = deleteButtonEl.closest("div.inner-peep").id;
              this.api.deleteIndividualPost(peepId, this.sessionKey);
            }
            ;
            this.api.loadPosts((posts) => {
              model3.setPosts(posts);
              this.displayPosts(posts);
            });
          });
          this.mainContainerEl.addEventListener("click", (event) => {
            const likeButtonEl = event.target.closest("button.like-button");
            if (likeButtonEl) {
              const peepId = likeButtonEl.closest("div.inner-peep").id;
              this.api.likePost(peepId, this.userId, this.sessionKey);
              likeButtonEl.disabled = true;
            }
            ;
            this.api.loadPosts((posts) => {
              model3.setPosts(posts);
              this.displayPosts(posts);
            });
          });
          this.mainContainerEl.addEventListener("click", (event) => {
            let unlikeButtonEl = event.target.closest("button.unlike-button");
            if (unlikeButtonEl) {
              const peepId = unlikeButtonEl.closest("div.inner-peep").id;
              this.api.dislikePost(peepId, this.userId, this.sessionKey);
              unlikeButtonEl.disabled = true;
            }
            ;
            this.api.loadPosts((posts) => {
              model3.setPosts(posts);
              this.displayPosts(posts);
            });
          });
          this.deletePostsButtonEl.addEventListener("click", () => {
            this.api.deletePost();
            this.deletePostsView();
            this.api.loadPosts((posts) => {
              model3.setPosts(posts);
              this.displayPosts(posts);
            });
          });
          this.signupButtonEl.addEventListener("click", () => {
            this.api.postUserInfo(this.signupUsernameEl.value, this.signupPasswordEl.value);
            this.signupUsernameEl.value = "";
            this.signupPasswordEl.value = "";
          });
          this.signinButtonEl.addEventListener("click", () => {
            this.api.createSession(this.signinUsernameEl.value, this.signinPasswordEl.value, (data) => {
              this.setSessions(data);
              console.log(this.userId);
              console.log(this.sessionKey);
            });
            document.querySelector("#user-name").innerText = `hello ${this.signinUsernameEl.value}`;
            this.signinUsernameEl.value = "";
            this.signinPasswordEl.value = "";
          });
          this.signoutButtonEl.addEventListener("click", () => {
            document.querySelector("#user-name").innerText = `goodbye`;
            location.reload();
          });
        }
        displayPosts() {
          this.clearPeeps();
          const posts = this.model.getPosts();
          posts.forEach((post2) => {
            this.createPeep(post2);
          });
          this.postInputEl.value = "";
        }
        displayError(error) {
          document.querySelectorAll("#error-message").forEach((error2) => {
            error2.remove();
          });
          const ErrorEl = document.createElement("div");
          ErrorEl.innerText = error;
          ErrorEl.setAttribute("id", "error-message");
          this.mainContainerEl.append(ErrorEl);
        }
        deletePostsView() {
          document.querySelectorAll(".post").forEach((note) => {
            post.remove();
          });
        }
        setSessions(data) {
          this.sessionKey = data.session_key;
          this.userId = data.user_id;
        }
        displayPeep(post2) {
          this.clearPeeps();
          this.createPeep(post2);
        }
        clearPeeps() {
          document.querySelectorAll(".posts").forEach((post2) => {
            post2.remove();
          });
        }
        createPeep(data) {
          const individualPeepEl = document.createElement("div");
          individualPeepEl.className = "posts";
          individualPeepEl.innerHTML = this.makePeep(data);
          document.querySelector("#main-container").appendChild(individualPeepEl);
        }
        makePeep(data) {
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
            </div>`;
        }
      };
      module.exports = ChitterView2;
    }
  });

  // index.js
  var ChitterModel = require_chitterModel();
  var ChitterApi = require_chitterApi();
  var ChitterView = require_chitterView();
  var api = new ChitterApi();
  var model = new ChitterModel();
  var view = new ChitterView(model, api);
  api.loadPosts((posts) => {
    model.setPosts(posts);
    view.displayPosts();
  }, (error) => {
    view.displayError(error);
  });
})();
