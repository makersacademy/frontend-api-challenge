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
          this.mainContainerEl = document.querySelector("#main-container");
          this.submitButtonEl = document.querySelector("#submit");
          this.api.loadPeep((peeps) => {
            this.displayPeeps(peeps);
          });
          this.submitButtonEl.addEventListener("click", () => {
            this.addNewPeep();
          });
        }
        addNewPeep() {
          console.log("ADD NEW PEEP");
          const peepEl = document.querySelector("#peep-input");
          const peepElValue = peepEl.value;
          this.api.createPeep(peepElValue, (response) => {
            this.api.loadPeep((peeps) => {
              this.displayPeeps(peeps);
            });
          });
          peepEl.value = "";
        }
        displayPeeps(peeps) {
          document.querySelectorAll(".peep").forEach((element) => {
            element.remove();
          });
          peeps.forEach((peep) => {
            const peepEl = document.createElement("div");
            peepEl.innerText = peep.body + " by " + peep.user.handle;
            peepEl.className = "peep";
            this.mainContainerEl.append(peepEl);
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
        loadPeep(callback) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
        createPeep(peep, callback) {
          const userId = 906;
          const sessionKey = "_2a_12_of40eJQ4vUPfupwnhoVj8O";
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
            method: "POST",
            data: { username: "SaM", password: "SAMpassword" },
            headers: {
              "Authorization": `Token token=${sessionKey}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ peep: { user_id: userId, body: peep } })
          }).then((response) => response.json()).then((data) => callback(data)).catch((error) => console.error("Error:", error));
        }
      };
      module.exports = ChitterApi2;
    }
  });

  // index.js
  var ChitterModel = require_chitterModel();
  var ChitterView = require_chitterView();
  var ChitterApi = require_chitterApi();
  var api = new ChitterApi();
  var model = new ChitterModel();
  var view = new ChitterView(model, api);
})();
