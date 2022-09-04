const Post = require("./post");

class PostsView{
  constructor(postsModel, api){
    this.loggedInContainer = document.querySelector("#logged-in");
    this.postContainer = document.querySelector("#post-container");
    this.postsModel = postsModel;
    this.api = api;
    this.user_id = null;
    this.session_key = null;

    document.querySelector('#submit-login').addEventListener('click', () => {
      const user = document.querySelector('#input-username');
      const password = document.querySelector('#input-password');
      let userVal = user.value;
      this.api.newSession(userVal, password.value, (data) => {
        this.startSession(userVal, data);
      })
      user.value = ""; password.value = "";
    })

    document.querySelector('#add-new-post').addEventListener('click', () => {
      const newPost = document.querySelector('#input-new-post').value;
      this.displayNewPost(newPost);
      document.querySelector('#input-new-post').value = "";
    })
  }

  displayPosts(){
    document.querySelectorAll('.post').forEach((div) => {
      div.remove()
    });

    const posts = this.postsModel.getPosts();

    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.innerText = post.body;
      postDiv.className = "post";
      this.postContainer.append(postDiv);
    })

  }

  displayNewPost(post){
    this.api.createPost(this.user_id, this.session_key, post, (data) => {
      this.postsModel.addPost(data);
      this.displayPosts();
    })
  }

  startSession(userVal, data){
    this.user_id = data.user_id;
    this.session_key = data.session_key;
    if ('errors' in data){
      this.loggedInContainer.innerText = `${data.errors.password}`
    }else {
      this.loggedInContainer.innerText = `${userVal} logged in`
      console.log(this.user_id, this.session_key);
    }
  }
}

module.exports = PostsView;