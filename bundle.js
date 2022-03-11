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
        addPost(post) {
          return this.posts.push(post);
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
        loadPosts(url, extension) {
        }
        deletePosts(url, extension) {
          fetch(`${url} + ${extension}`, {
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
          this.submitUserButtonEl = document.querySelector("#submit-user-button");
          this.deletePostsButtonEl = document.querySelector("#delete-posts-button");
          this.mainContainerEl = document.querySelector("#main-container");
          this.postInputEl = document.querySelector("#user-input");
          this.postButtonEl = document.querySelector("#post-button");
          this.postButtonEl.addEventListener("click", () => {
            model3.addPost(this.postInputEl.value);
            this.displayPosts();
          });
        }
        displayPosts() {
          document.querySelectorAll(".post").forEach((post) => {
            post.remove();
          });
          const posts = this.model.getPosts();
          posts.forEach((post) => {
            const postEl = document.createElement("div");
            postEl.innerText = post;
            postEl.className = "post";
            this.mainContainerEl.append(postEl);
          });
          this.postInputEl.value = "";
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
  var view = new ChitterView(model);
  view.displayPosts();
})();
