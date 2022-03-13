const ChitterAPI = require("./chitterAPI");
const Post = require("./post");
const Posts = require("./postsModel");
const PostsView = require("./postsView");

console.log('App is running');

const api = new ChitterAPI();
const posts = new Posts();
const view = new PostsView(posts, api);

api.loadPosts((loaded_posts) => {
  posts.setPosts(loaded_posts);
  view.displayPosts();
})

