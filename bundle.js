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
          this.peeps.push(peep);
        }
        reset() {
          this.peeps = [];
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
          this.peepContainerEl = document.querySelector("#peep-container");
        }
        displayPeeps() {
          const peeps = this.model.getPeeps();
          peeps.forEach((peep) => {
            const peepEl = document.createElement("div");
            peepEl.innerText = peep;
            peepEl.className = "peep";
            this.peepContainerEl.append(peepEl);
          });
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
  model.addPeep("test peep one");
  view.displayPeeps();
})();
