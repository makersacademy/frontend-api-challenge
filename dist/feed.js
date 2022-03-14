import {
  __commonJS,
  require_chitterApi
} from "./chunk-JRTVP5K5.js";

// feedView.js
var require_feedView = __commonJS({
  "feedView.js"(exports, module) {
    var FeedView2 = class {
      constructor(model, api2) {
        this.model = model;
        this.api = api2;
        this.feedContainerEl = document.querySelector("#feed-container");
        this.displayPeeps();
      }
      displayPeeps() {
        const peeps = this.model.getPeeps();
        peeps.forEach((peep) => {
          const peepEl = document.createElement("feed");
          const br = document.createElement("br");
          peepEl.innerText = `${peep.body}, by ${peep.user.handle}`;
          peepEl.className = "peep";
          this.feedContainerEl.append(peepEl);
          this.feedContainerEl.append(br);
        });
      }
    };
    module.exports = FeedView2;
  }
});

// feedModel.js
var require_feedModel = __commonJS({
  "feedModel.js"(exports, module) {
    var FeedModel2 = class {
      constructor() {
        this.peeps = [];
      }
      getPeeps() {
        return this.peeps;
      }
      setPeeps(peeps) {
        this.peeps = peeps;
      }
    };
    module.exports = FeedModel2;
  }
});

// feed.js
var ChitterApi = require_chitterApi();
var FeedView = require_feedView();
var FeedModel = require_feedModel();
var api = new ChitterApi();
var feedModel = new FeedModel();
var feedView = new FeedView(feedModel, api);
api.loadPeeps((peeps) => {
  feedModel.setPeeps(peeps);
  feedView.displayPeeps();
});
