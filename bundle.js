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
        addPeeps(peep) {
          return this.peeps.push(peep);
        }
        deletePeeps() {
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
        constructor(model) {
          this.model = model;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        viewPeeps() {
          let displayPeeps = this.model.getPeeps();
          displayPeeps.forEach((peep) => {
            let div = document.createElement("div");
            div.innerText = peep;
            div.className = "peep";
            this.mainContainerEl.append(div);
          });
        }
      };
      module.exports = ChitterView2;
    }
  });

  // index.js
  var ChitterModel = require_chitterModel();
  var ChitterView = require_chitterView();
})();
