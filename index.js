const ChitterAPI = require("./chitterAPI");
const Posts = require("./postsModel");
const PostsView = require("./postsView");

console.log('Chitter!');

const api = new ChitterAPI();
const posts = new Posts();
const view = new PostsView(posts, api);

api.loadPosts((loaded_posts) => {
  posts.setPosts(loaded_posts);
  view.displayPosts();
})