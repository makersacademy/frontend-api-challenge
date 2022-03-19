(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // chitterApi.js
  var require_chitterApi = __commonJS({
    "chitterApi.js"(exports, module) {
      var ChitterApi2 = class {
        loadPeeps(callback) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
      };
      module.exports = ChitterApi2;
    }
  });

  // chitterModel.js
  var require_chitterModel = __commonJS({
    "chitterModel.js"(exports, module) {
      var ChitterModel2 = class {
        constructor() {
          this.peeps = [];
          this.likeCounter = 0;
          this.unlikeCounter = 0;
        }
        getPeeps() {
          return this.peeps;
        }
        setPeeps(returnedPeeps) {
          this.peeps = returnedPeeps;
        }
        addPeeps(peep) {
          this.peeps.unshift(peep);
        }
        getLikeCounter() {
          return this.likeCounter;
        }
        addLike() {
          this.likeCounter++;
        }
        getUnlikeCounter() {
          return this.unikeCounter;
        }
        addUnlike() {
          this.unlikeCounter--;
        }
      };
      module.exports = ChitterModel2;
    }
  });

  // chitterView.js
  var require_chitterView = __commonJS({
    "chitterView.js"(exports, module) {
      var ChitterView2 = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayPeeps() {
          const peeps = this.model.getPeeps();
          peeps.forEach((peep) => {
            const peepEl = document.createElement("div");
            peepEl.innerText = peep.body;
            peepEl.className = "block subtitle is-4 box has-text-primary-dark";
            this.mainContainerEl.append(peepEl);
            const likeButtonEl = document.createElement("button");
            likeButtonEl.className += "button block";
            likeButtonEl.innerHTML = "like";
            this.mainContainerEl.append(likeButtonEl);
            const unlikeButtonEl = document.createElement("button");
            unlikeButtonEl.className += "button block";
            unlikeButtonEl.innerHTML = "unlike";
            this.mainContainerEl.append(unlikeButtonEl);
          });
        }
      };
      module.exports = ChitterView2;
    }
  });

  // index.js
  console.log("#1 Chitter app is running");
  var ChitterApi = require_chitterApi();
  var ChitterModel = require_chitterModel();
  var ChitterView = require_chitterView();
  var api = new ChitterApi();
  var model = new ChitterModel();
  var view = new ChitterView(model, api);
  api.loadPeeps((peeps) => {
    model.setPeeps(peeps);
    view.displayPeeps();
  });
  console.log("#2 Chitter app is still running!");
})();
