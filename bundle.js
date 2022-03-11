(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // chitterModel.js
  var require_chitterModel = __commonJS({
    "chitterModel.js"(exports, module) {
      var ChitterModel = class {
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
      module.exports = ChitterModel;
    }
  });

  // index.js
  var chitterModel = require_chitterModel();
})();
