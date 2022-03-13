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
        createPeep(peep2) {
          const usersPeep = { body: peep2.body };
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
        addPeep(peep2) {
          return this.peeps.push(peep2);
        }
        setPeeps(peeps) {
          this.peeps = peeps;
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
      var ChitterApi2 = require_chitterApi();
      var ChitterView2 = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
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
          allPeeps.forEach((peep2) => {
            let div = document.createElement("div");
            div.innerText = peep2;
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
  var ChitterApi = require_chitterApi();
  var ChitterModel = require_chitterModel();
  var ChitterView = require_chitterView();
  var api = new ChitterApi();
  var model = new ChitterModel();
  var view = new ChitterView(model, api);
  api.loadPeeps((peeps) => {
    model.addPeep("Hello world");
    model.addPeep("This is a peep!");
    model.addPeep("I am making a front end Chitter");
    model.addPeep("Server??");
    model.setPeeps(peep);
    view.viewPeeps();
  });
})();
