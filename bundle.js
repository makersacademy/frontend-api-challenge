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
          this.chits = [];
        }
        getChits() {
          return this.chits;
        }
        addChit(chit) {
          this.chits.push(chit);
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
          this.chitterModel = model;
          this.maincontainerEl = document.querySelector("#main-container");
          console.log("hello10");
        }
        displayChits() {
          this.chitterModel.getChits().forEach((chit) => {
            const chitEl = document.createElement("div");
            chitEl.innerText = chit;
            chitEl.className = "chit";
            this.maincontainerEl.append(chitEl);
          });
          console.log("hello11");
        }
        testChits() {
          this.maincontainerEl.append("hello");
        }
        testModel() {
          chits = this.chitterModel.chits;
          this.maincontainerEl.append(chits);
        }
      };
      module.exports = ChitterView2;
    }
  });

  // index.js
  var ChitterModel = require_chitterModel();
  var ChitterView = require_chitterView();
  var chitterModel = new ChitterModel();
  chitterModel.addChit("example chit");
  chitterModel.addChit("example chit2");
  chitterModel.addChit("example chit3");
  chitterModel.addChit("example chit4");
  console.log(chitterModel.chits);
  var chitterView = new ChitterView(chitterModel);
  chitterView.displayChits();
})();
