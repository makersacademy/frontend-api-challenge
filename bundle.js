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

  // post.js
  var require_post = __commonJS({
    "post.js"(exports, module) {
      var Post2 = class {
        constructor(body) {
          this.body = body;
        }
      };
      module.exports = Post2;
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
      var Post2 = require_post();
      var PostsView2 = class {
        constructor(postsModel, api2) {
          this.postContainer = document.querySelector("#post-container");
          this.postsModel = postsModel;
          this.api = api2;
          document.querySelector("#add-new-post").addEventListener("click", () => {
            const newPost = document.querySelector("#input-new-post").value;
            const post = new Post2(newPost);
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
      };
      module.exports = PostsView2;
    }
  });

  // index.js
  var ChitterAPI = require_chitterAPI();
  var Post = require_post();
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
