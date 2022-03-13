const Post = require("./post");

class PostsView{
  constructor(postsModel, api){
    this.postContainer = document.querySelector("#post-container")
    this.postsModel = postsModel;
    this.api = api;

    document.querySelector('#add-new-post').addEventListener('click', () => {
      const newPost = document.querySelector(('#input-new-post')).value;
      const post = new Post(newPost);
      this.displayNewPost(post);
      document.querySelector('#input-new-post').value = "";
    })
  }

  displayPosts(){
    const posts = this.postsModel.getPosts();

    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.innerText = post.body;
      postDiv.className = "post";
      this.postContainer.append(postDiv);
    })

  }

  displayNewPost(post){
    this.postsModel.addPost(post);
    this.displayPosts();
  }
}

module.exports = PostsView;
