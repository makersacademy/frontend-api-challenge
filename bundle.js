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
        createPeep(peep, callback) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ content: `${peep}` })
          }).then((response) => response.json()).then((data) => {
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
        setPeeps(data) {
          this.peeps = data;
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
          this.api = api2;
          this.model = model2;
          this.peepContainerEl = document.querySelector("#peep-container");
          this.peepButtonEl = document.querySelector("#add-peep-button");
          this.peepButtonEl.addEventListener("click", () => {
            const newPeep = document.querySelector("#peep-input").value;
            this.api.createPeep(newPeep, (data) => {
              this.addNewPeep(newPeep);
            });
          });
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
        addNewPeep(newPeep) {
          this.model.addPeep(newPeep);
          this.displayPeeps();
        }
      };
      module.exports = ChitterView2;
    }
  });

  // index.js
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
})();
