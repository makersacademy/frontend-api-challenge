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
        loadPosts(callback, errorFunction) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((data) => console.log(callback(data))).catch((error) => {
            errorFunction(error);
            console.log(`${error}`);
          });
        }
        postPeeps(post2, userId, sessionKey, errorFunction) {
          const correctBody = { peep: { user_id: `${userId}`, body: `${post2}` } };
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
            method: "POST",
            headers: {
              "Authorization": `Token token=${sessionKey}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify(correctBody)
          }).catch((error) => {
            errorFunction(error);
            console.log(`Posting: ${error}`);
          });
        }
        getIndividualPeep(peepId, callback, errorFunction) {
          fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${peepId}`).then((response) => response.json()).then((data) => console.log(callback(data))).catch((error) => {
            errorFunction(error);
            console.log(`${error}`);
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
          this.api = api3;
          this.postButtonEl.addEventListener("click", () => {
            this.api.postPeeps(this.postInputEl.value, this.userId, this.sessionKey);
            this.api.loadPosts((posts) => {
              model3.setPosts(posts);
              this.displayPosts();
            });
          });
          this.deletePostsButtonEl.addEventListener("click", () => {
            this.api.deletePost();
            this.deletePostsView();
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
              this.signinUsernameEl.value = "";
              this.signinPasswordEl.value = "";
            });
          });
          this.signoutButtonEl.addEventListener("click", () => {
            this.sessionKey = null;
            this.userId = null;
            console.log(this.sessionKey);
          });
          this.viewButtonEl.addEventListener("click", () => {
            this.sessionKey = null;
            this.userId = null;
            console.log(this.sessionKey);
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
          document.querySelectorAll(".post").forEach((post2) => {
            post2.remove();
          });
          document.querySelectorAll(".likes").forEach((post2) => {
            post2.remove();
          });
          document.querySelectorAll(".date").forEach((post2) => {
            post2.remove();
          });
          document.querySelectorAll(".handle").forEach((post2) => {
            post2.remove();
          });
          document.querySelectorAll(".delete-peep-button").forEach((post2) => {
            post2.remove();
          });
          document.querySelectorAll(".view-button").forEach((post2) => {
            post2.remove();
          });
          document.querySelectorAll(".likes").forEach((post2) => {
            post2.remove();
          });
        }
        createPeep(post2) {
          const postEl = document.createElement("div");
          const dateEl = document.createElement("div");
          const handleEl = document.createElement("div");
          const viewButtonEl = document.createElement("button");
          postEl.innerText = post2.body;
          postEl.className = "post";
          viewButtonEl.setAttribute("id", `${post2.id}`);
          dateEl.innerText = post2.created_at.slice(0, 10);
          dateEl.className = "date";
          handleEl.innerText = `posted by: ${post2.user.handle}`;
          handleEl.className = "handle";
          viewButtonEl.innerText = "view";
          viewButtonEl.className = "view-button";
          this.mainContainerEl.append(postEl, dateEl, handleEl, viewButtonEl);
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
