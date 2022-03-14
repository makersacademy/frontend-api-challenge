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
          this.peeps.push(peep);
        }
        reset() {
          this.peeps = [];
        }
        set(peeps) {
          this.peeps = peeps;
        }
      };
      module.exports = ChitterModel2;
    }
  });

  // chitterApi.js
  var require_chitterApi = __commonJS({
    "chitterApi.js"(exports, module) {
      var ChitterApi2 = class {
        getChitterData(callback) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((data) => console.log(callback(data)));
        }
        createPeep() {
          const data = { username: "example" };
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          }).then((response) => response.json()).then((data2) => {
            console.log("Success:", data2);
          }).catch((error) => {
            console.error("Error:", error);
          });
        }
      };
      module.exports = ChitterApi2;
    }
  });

  // chitterView.js
  var require_chitterView = __commonJS({
    "chitterView.js"(exports, module) {
      var ChitterModel2 = require_chitterModel();
      var ChitterApi2 = require_chitterApi();
      var ChitterView2 = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.buttonEl = document.querySelector("#show-peeps-button");
          this.api.getChitterData((data) => {
            console.log(data);
            console.log(this.model.getPeeps());
          });
        }
        add() {
        }
        display() {
          const peeps = this.model.getPeeps();
          peeps.forEach((element) => {
            const peepEl = document.createElement("div");
            peepEl.innerText = element.body;
            this.mainContainerEl.append(peepEl);
          });
        }
      };
      module.exports = ChitterView2;
    }
  });

  // index.js
  var ChitterModel = require_chitterModel();
  var ChitterApi = require_chitterApi();
  var ChitterView = require_chitterView();
  var model = new ChitterModel();
  var api = new ChitterApi();
  var view = new ChitterView(model, api);
  api.getChitterData((data) => {
    model.set(data);
    view.display();
  });
})();
