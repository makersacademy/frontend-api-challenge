class ChitterModel {
  constructor() {
    this.posts = []
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
    return this.posts = posts
  }
}

module.exports = ChitterModel