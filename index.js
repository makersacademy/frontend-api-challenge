const ChitterApi = require('./chitterApi');
const FeedView = require('./feedView');
const FeedModel = require('./feedModel')

const api = new ChitterApi();
const feedModel = new FeedModel();
const feedView = new FeedView(feedModel, api);

api.loadPeeps((peeps) => {
  feedModel.setPeeps(peeps);
  feedView.displayPeeps();
})