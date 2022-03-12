const ChitterModel = require('./chitterModel');
const ChitterApi = require('./chitterApi');
const ChitterView = require('./chitterView');

const api = new ChitterApi();
const model = new ChitterModel();
const view = new ChitterView(model, api);



api.loadPosts((posts) => {
  model.setPosts(posts);
  view.displayPosts();
}, (error) => {
  view.displayError(error);
});