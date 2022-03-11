const Posts = require("./postsModel");
const PostsView = require("./postsView");

console.log('App is running');

const posts = new Posts();
const view = new PostsView(posts);

posts.addPost('test');
view.displayPosts();