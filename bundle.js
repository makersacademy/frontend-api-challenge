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

  // chitterApi.js
  var require_chitterApi = __commonJS({
    "chitterApi.js"(exports, module) {
      var ChitterApi = class {
        loadPeeps(callback) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
        createPeep(peep) {
          const usersPeep = { peep, body: peep.body };
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(usersPeep)
          }).then((response) => response.json()).then((data) => {
            console.log("Working?:", data);
            return data;
          });
        }
      };
      module.exports = ChitterApi;
    }
  });

  // chitterView.js
  var require_chitterView = __commonJS({
    "chitterView.js"(exports, module) {
      var ChitterApi = require_chitterApi();
      var ChitterView2 = class {
        constructor(model2, api) {
          this.model = model2;
          this.api = api;
          this.mainContainerEl = document.querySelector("#main-container");
          document.querySelector("#submit-peep-button").addEventListener("click", () => {
            let newPeep = document.querySelector("#user-input").value;
            this.addNewPeep(newPeep);
            const clearInputField = document.getElementById("user-input");
            const btn = document.getElementById("submit-peep-button");
            clearInputField.value = " ";
          });
        }
        viewPeeps() {
          document.querySelectorAll(".peep").forEach((element) => {
            element.remove();
          });
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
  model.addPeep("I am making a front end Chitter");
  view.viewPeeps();
})();
