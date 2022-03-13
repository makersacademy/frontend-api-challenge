class PostsView{
  constructor(postsModel){
    this.postContainer = document.querySelector("#post-container")
    this.postsModel = postsModel;

    document.querySelector('#add-new-post').addEventListener('click', () => {
      const newPost = document.querySelector(('#input-new-post')).value;
      this.displayNewPost(newPost)
      document.querySelector('#input-new-post').value = "";
    })
  }

  displayPosts(){
    const posts = this.postsModel.getPosts();

    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.innerText = post;
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