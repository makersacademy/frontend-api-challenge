class PostsView{
  constructor(postsModel){
    this.postContainer = document.querySelector("#post-container")
    this.postsModel = postsModel;
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
}

module.exports = PostsView;