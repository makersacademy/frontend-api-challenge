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
          this.peepArray = [];
        }
        getPeeps() {
          return this.peepArray;
        }
        addPeep(peep) {
          this.peepArray.push(peep);
        }
        setPeeps(data) {
          data.forEach((peep) => {
            this.peepArray.push(peep.body);
          });
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
          this.inputEl = document.querySelector("#peep-input");
          this.mainContainerEl = document.querySelector("#main-container");
          this.buttonEl = document.querySelector("#publish");
          this.buttonEl.addEventListener("click", () => {
            this.addNewPeep();
          });
        }
        displayPeeps() {
          let peeps = this.model.getPeeps();
          peeps.forEach((item) => {
            const peepDiv = document.createElement("div");
            peepDiv.innerText = item;
            peepDiv.className = "peep";
            this.mainContainerEl.append(peepDiv);
          });
        }
        addNewPeep() {
          let content = this.inputEl.value;
          this.api.createPeep(1, content, (response) => {
            this.model.addPeep(response);
            this.api.loadPeeps((data) => {
              this.model.setPeeps(data);
              this.displayPeeps();
            });
          });
        }
      };
      module.exports = ChitterView2;
    }
  });

  // chitterApi.js
  var require_chitterApi = __commonJS({
    "chitterApi.js"(exports, module) {
      var ChitterApi2 = class {
        loadPeeps(callback) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
        createPeep(user_id, content, callback) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
            method: "POST",
            headers: {
              "Authorization": "Token token=a_valid_session_key",
              "Content-Type": "application/json"
            },
            peep: {
              user_id,
              body: content
            }
          }).then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
      };
      module.exports = ChitterApi2;
    }
  });

  // index.js
  var ChitterModel = require_chitterModel();
  var ChitterView = require_chitterView();
  var ChitterApi = require_chitterApi();
  var model = new ChitterModel();
  var api = new ChitterApi();
  var view = new ChitterView(model, api);
  api.loadPeeps((data) => {
    model.setPeeps(data);
    view.displayPeeps();
  });
})();
