(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // chitterAPI.js
  var require_chitterAPI = __commonJS({
    "chitterAPI.js"(exports, module) {
      var ChitterAPI2 = class {
        loadPosts(callback) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
        newSession(username, password, callback) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify({
              session: {
                handle: `${username}`,
                password: `${password}`
              }
            })
          }).then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
      };
      module.exports = ChitterAPI2;
    }
  });

  // postsModel.js
  var require_postsModel = __commonJS({
    "postsModel.js"(exports, module) {
      var Posts2 = class {
        constructor() {
          this.posts = [];
        }
        getPosts() {
          return this.posts;
        }
        setPosts(loaded_posts) {
          console.log(loaded_posts);
          this.posts = loaded_posts;
        }
        addPost(post) {
          this.posts.push(post);
        }
      };
      module.exports = Posts2;
    }
  });

  // post.js
  var require_post = __commonJS({
    "post.js"(exports, module) {
      var Post = class {
        constructor(body) {
          this.body = body;
        }
      };
      module.exports = Post;
    }
  });

  // postsView.js
  var require_postsView = __commonJS({
    "postsView.js"(exports, module) {
      var Post = require_post();
      var PostsView2 = class {
        constructor(postsModel, api2) {
          this.loggedInContainer = document.querySelector("#logged-in");
          this.postContainer = document.querySelector("#post-container");
          this.postsModel = postsModel;
          this.api = api2;
          this.user_id = null;
          this.session_key = null;
          document.querySelector("#submit-login").addEventListener("click", () => {
            const user = document.querySelector("#input-username");
            const password = document.querySelector("#input-password");
            let userVal = user.value;
            this.api.newSession(userVal, password.value, (data) => {
              this.startSession(userVal, data);
            });
            user.value = "";
            password.value = "";
          });
          document.querySelector("#add-new-post").addEventListener("click", () => {
            const newPost = document.querySelector("#input-new-post").value;
            const post = new Post(newPost);
            this.displayNewPost(post);
            document.querySelector("#input-new-post").value = "";
          });
        }
        displayPosts() {
          const posts2 = this.postsModel.getPosts();
          posts2.forEach((post) => {
            const postDiv = document.createElement("div");
            postDiv.innerText = post.body;
            postDiv.className = "post";
            this.postContainer.append(postDiv);
          });
        }
        displayNewPost(post) {
          this.postsModel.addPost(post);
          this.displayPosts();
        }
        startSession(userVal, data) {
          this.user_id = data.user_id;
          this.session_key = data.session_key;
          if ("errors" in data) {
            this.loggedInContainer.innerText = `${data.errors.password}`;
          } else {
            this.loggedInContainer.innerText = `${userVal} logged in`;
            console.log(this.user_id, this.session_key);
          }
        }
      };
      module.exports = PostsView2;
    }
  });

  // index.js
  var ChitterAPI = require_chitterAPI();
  var Posts = require_postsModel();
  var PostsView = require_postsView();
  console.log("App is running");
  var api = new ChitterAPI();
  var posts = new Posts();
  var view = new PostsView(posts, api);
  api.loadPosts((loaded_posts) => {
    posts.setPosts(loaded_posts);
    view.displayPosts();
  });
})();
