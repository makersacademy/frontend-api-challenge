(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // api.js
  var require_api = __commonJS({
    "api.js"(exports, module) {
      var ChitterApi2 = class {
        loadAllPeeps(callback) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((data) => callback(data));
        }
        createUser(handle, password) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ user: { handle, password } })
          }).then((response) => response.json()).then((data) => {
            console.log("Success:", data);
          }).catch((error) => {
            console.error("Error:", error);
          });
        }
      };
      module.exports = ChitterApi2;
    }
  });

  // peepModel.js
  var require_peepModel = __commonJS({
    "peepModel.js"(exports, module) {
      var PeepModel2 = class {
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
        reset() {
          this.peeps = [];
        }
      };
      module.exports = PeepModel2;
    }
  });

  // peepView.js
  var require_peepView = __commonJS({
    "peepView.js"(exports, module) {
      var PeepView2 = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          this.body = document.querySelector("body");
          this.peepList = document.querySelector("#peep-list");
        }
        displayPeeps() {
          let peeps = this.model.getPeeps();
          peeps.forEach((peep) => {
            let createPeep = document.createElement("div");
            createPeep.className = "peep";
            createPeep.innerText = peep["body"] + " - " + peep["user"]["handle"];
            this.peepList.append(createPeep);
          });
        }
        displayPeepsFromApi() {
          this.api.loadAllPeeps((data) => {
            this.model.setPeeps(data);
            this.displayPeeps();
          });
        }
      };
      module.exports = PeepView2;
    }
  });

  // index.js
  var ChitterApi = require_api();
  var PeepModel = require_peepModel();
  var PeepView = require_peepView();
  var model = new PeepModel();
  var api = new ChitterApi();
  model.addPeep({
    id: 1494,
    body: "First peep",
    created_at: "2022-08-20T11:33:02.912Z",
    updated_at: "2022-08-20T11:33:02.912Z",
    user: { id: 1124, handle: "jony144" },
    likes: [{ user: { id: 1120, handle: "margaritapeter" } }]
  });
  var view = new PeepView(model, api);
  view.displayPeepsFromApi();
  api.createUser("InitalUserTest", "InitalPasswordTest");
})();
