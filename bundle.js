(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // chitterModel.js
  var require_chitterModel = __commonJS({
    "chitterModel.js"(exports, module) {
      var ChitterModel2 = class {
        constructor() {
          this.peeps = [];
        }
        getPeeps() {
          return this.peeps;
        }
        addPeep(peep) {
          return this.peeps.push(peep);
        }
        deletePeep() {
          return this.peeps = [];
        }
      };
      module.exports = ChitterModel2;
    }
  });

  // chitterView.js
  var require_chitterView = __commonJS({
    "chitterView.js"(exports, module) {
      var ChitterView2 = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
          document.querySelector("#submit-peep-button").addEventListener("click", () => {
            let newPeep = document.querySelector("#user-input").value;
            this.addNewPeep(newPeep);
          });
        }
        viewPeeps() {
          let allPeeps = this.model.getPeeps();
          allPeeps.forEach((peep) => {
            let div = document.createElement("div");
            div.innerText = peep;
            div.className = "peep";
            this.mainContainerEl.append(div);
          });
        }
        addNewPeep(newPeep) {
          this.model.addPeep(newPeep);
          this.viewPeeps();
        }
      };
      module.exports = ChitterView2;
    }
  });

  // index.js
  var ChitterModel = require_chitterModel();
  var ChitterView = require_chitterView();
  var model = new ChitterModel();
  var view = new ChitterView(model);
  model.addPeep("Hello world");
  model.addPeep("This is a peep!");
  view.viewPeeps();
})();
