class Posts {
  constructor(){
    this.posts = []

  }

  getPosts(){
    return this.posts;
  }

  addPost(post){
    this.posts.push(post);
  }
}

module.exports = Posts;