(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // chitterApi.js
  var require_chitterApi = __commonJS({
    "chitterApi.js"(exports, module) {
      var ChitterApi2 = class {
        constructor(baseUrl = "https://chitter-backend-api-v2.herokuapp.com/") {
          this.baseUrl = baseUrl;
        }
        getPeepsFromServer(errorCallback, callback) {
          try {
            fetch(this.baseUrl + "/peeps").then((response) => response.json()).then((data) => callback(data));
          } catch (error) {
            errorCallback(error);
          }
        }
      };
      module.exports = ChitterApi2;
    }
  });

  // chitterModel.js
  var require_chitterModel = __commonJS({
    "chitterModel.js"(exports, module) {
      var ChitterApi2 = require_chitterApi();
      var ChitterModel2 = class {
        constructor(api2 = new ChitterApi2()) {
          this.api = api2;
          this.peeps = [
            { id: 1, body: "Default Peep 1", user: { handle: "default" } },
            { id: 2, body: "Default Peep 2", user: { handle: "default" } },
            { id: 3, body: "Default Peep 3", user: { handle: "default" } }
          ];
        }
        loadPeeps(callback) {
          this.peeps = [];
          this.api.getPeepsFromServer((error) => {
            console.log(`Error in Load Peeps: ${error}`);
          }, (peepList) => {
            peepList.forEach((peep) => {
              console.log(`Peep: ${peep}`);
              this.peeps.push(peep);
            });
            callback();
          });
        }
      };
      module.exports = ChitterModel2;
    }
  });

  // chitterView.js
  var require_chitterView = __commonJS({
    "chitterView.js"(exports, module) {
      var ChitterModel2 = require_chitterModel();
      var ChitterView2 = class {
        constructor(model2 = new ChitterModel2()) {
          this.model = model2;
          this.peepsListEl = document.querySelector("#peep-list");
        }
        displayPeeps() {
          this.peepsListEl.innerHTML = "";
          let peeps = this.model.peeps;
          peeps.forEach((peepObject) => {
            let peepHTML = this.generatePeep(peepObject);
            this.peepsListEl.append(peepHTML);
          });
        }
        generatePeep(peepObject) {
          let peepContainer = document.createElement("div");
          let peepBody = document.createElement("p");
          let peepAuthor = document.createElement("p");
          Object.assign(peepContainer, {
            className: "peep",
            id: peepObject.id
          });
          Object.assign(peepBody, {
            innerText: peepObject.body
          });
          Object.assign(peepAuthor, {
            innerText: peepObject.user.handle
          });
          peepContainer.append(peepBody);
          peepContainer.append(peepAuthor);
          return peepContainer;
        }
      };
      module.exports = ChitterView2;
    }
  });

  // index.js
  var ChitterView = require_chitterView();
  var ChitterModel = require_chitterModel();
  var ChitterApi = require_chitterApi();
  var api = new ChitterApi();
  var model = new ChitterModel();
  var view = new ChitterView(model);
  model.loadPeeps(() => {
    view.displayPeeps();
  });
})();
