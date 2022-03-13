(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // peepsApi.js
  var require_peepsApi = __commonJS({
    "peepsApi.js"(exports, module) {
      var PeepsApi2 = class {
        getPeeps(callback) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((data) => {
            callback(data);
            console.log(data);
          });
        }
      };
      module.exports = PeepsApi2;
    }
  });

  // peepsModel.js
  var require_peepsModel = __commonJS({
    "peepsModel.js"(exports, module) {
      var PeepsModel2 = class {
        constructor() {
          this.peeps = [];
        }
        getPeeps() {
          return this.peeps;
        }
        addPeep(peep) {
          this.peeps.push(peep);
        }
        setPeeps(peeps) {
          this.peeps = peeps;
        }
      };
      module.exports = PeepsModel2;
    }
  });

  // peepsView.js
  var require_peepsView = __commonJS({
    "peepsView.js"(exports, module) {
      var PeepsView2 = class {
        constructor(api2, model2) {
          this.api = api2;
          this.model = model2;
          const viewPeepsButtonEl = document.querySelector("#add-peep-button");
          this.peepsEl = document.querySelector("#peeps");
          viewPeepsButtonEl.addEventListener("click", () => {
            console.log("i was clicked");
            this.api.getPeeps((peepData) => {
              console.log(peepData);
              this.displayPeeps();
            });
          });
        }
        displayPeeps() {
          const peeps = this.model.getPeeps();
          peeps.forEach((peep) => {
            let bodyEl = document.createElement("div");
            bodyEl.innerText = peep.body;
            this.peepsEl.append(bodyEl);
          });
        }
      };
      module.exports = PeepsView2;
    }
  });

  // index.js
  var PeepsApi = require_peepsApi();
  var PeepsModel = require_peepsModel();
  var PeepsView = require_peepsView();
  console.log("Hello from the developer console!");
  var api = new PeepsApi();
  var model = new PeepsModel();
  var view = new PeepsView(api, model);
  api.getPeeps((peeps) => {
    model.setPeeps(peeps);
    view.displayPeeps(peeps);
  });
})();
