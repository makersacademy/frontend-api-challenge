(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // peepModel.js
  var require_peepModel = __commonJS({
    "peepModel.js"(exports, module) {
      var PeepModel2 = class {
        constructor() {
          this.feed = [];
        }
        getPeeps() {
          return this.feed;
        }
        addPeep(peep) {
          this.feed.push(peep);
        }
      };
      module.exports = PeepModel2;
    }
  });

  // peepView.js
  var require_peepView = __commonJS({
    "peepView.js"(exports, module) {
      var PeepView2 = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
          console.log(this.mainContainerEl);
          this.peepButtonEl = document.querySelector("#add-peep-button");
          this.peepInputEl = document.querySelector("#add-peep-input");
          console.log(this.peepButtonEl);
          this.peepButtonEl.addEventListener("click", () => {
            const peepContent = this.peepInputEl.value;
            this.displayPeeps();
          });
        }
        displayPeeps() {
          const feed = this.model.getPeeps();
          feed.forEach((peep) => {
            const peepEl = document.createElement("div");
            peepEl.innerText = peep;
            peepEl.className = "peep";
            this.mainContainerEl.append(peepEl);
          });
        }
      };
      module.exports = PeepView2;
    }
  });

  // index.js
  var PeepModel = require_peepModel();
  var PeepView = require_peepView();
  var model = new PeepModel();
  var view = new PeepView(model);
  model.addPeep("Hello, world");
  view.displayPeeps();
  console.log("Everything is running");
})();
