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

  // postsView.js
  var require_postsView = __commonJS({
    "postsView.js"(exports, module) {
      var PostsView2 = class {
        constructor(postsModel) {
          this.postContainer = document.querySelector("#post-container");
          this.postsModel = postsModel;
        }
        displayPosts() {
          const posts2 = this.postsModel.getPosts();
          posts2.forEach((post) => {
            const postDiv = document.createElement("div");
            postDiv.innerText = post;
            postDiv.className = "post";
            this.postContainer.append(postDiv);
          });
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
  var view = new PostsView(posts);
  api.loadPosts((loaded_posts) => {
    posts.setPosts(loaded_posts);
    view.displayPosts();
  });
})();
