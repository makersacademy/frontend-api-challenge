class Posts {
  constructor(){
    this.posts = []

  }

  getPosts(){
    return this.posts;
  }

  setPosts(loaded_posts){
    console.log(loaded_posts)
    this.posts = loaded_posts;
  }

  addPost(post){
    this.posts.push(post);
  }
}

module.exports = Posts;