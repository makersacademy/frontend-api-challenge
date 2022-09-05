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
        loadPeepsById(id, callback) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps/" + id).then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
        createUser(username, password, callback) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ "user": { "handle": username, "password": password } })
          }).then((response) => response.json()).then((data) => {
            callback(data);
            console.log(data);
          }).catch((error) => {
            console.log("Looks like there was a problem", error);
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
          this.userId = null;
          this.sessionKey = null;
        }
        getPeeps() {
          return this.peeps;
        }
        setPeeps(apiPeeps) {
          this.peeps = apiPeeps;
        }
        getUserId() {
          return this.userId;
        }
        setUserId(userId) {
          this.userId = userId;
        }
        getSessionKey() {
          return this.sessionKey;
        }
        setUserId(sessionKey) {
          this.sessionKey = sessionKey;
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
          this.body = document.querySelector("body");
          this.api = api2;
          this.displayPeepsFromApi();
        }
        displayPeeps() {
          let peeps = [];
          document.querySelector("#see-peeps").addEventListener("click", () => {
            this.displayPeepsFromApi();
            peeps = this.model.getPeeps();
            console.log(peeps);
            peeps.forEach((peep) => {
              const peepEl = document.createElement("div");
              peepEl.textContent = peep.body;
              peepEl.className = "peep";
              console.log(peepEl);
              this.body.append(peepEl);
            });
          });
        }
        displayPeepsFromApi() {
          if (this.api != null) {
            this.api.loadPeeps((data) => {
              this.model.setPeeps(data);
              console.log(data);
            });
          }
        }
        displayPeepsById() {
          document.querySelector("#search-peeps-id").addEventListener("click", () => {
            const id = document.querySelector("#id-input").value;
            this.api.loadPeepsById(id, (data) => {
              if (data != null) {
                const peepEl = document.createElement("div");
                peepEl.textContent = data.body;
                peepEl.className = "peep";
                console.log(peepEl);
                this.body.append(peepEl);
              }
            });
          });
        }
        registerUser() {
          document.querySelector("#sign-up-btn").addEventListener("click", () => {
            const user = document.querySelector("#user").value;
            const password = document.querySelector("#password").value;
            this.api.createUser(user, password, (response) => {
              console.log(response);
            });
          });
        }
      };
      module.exports = ChitterView2;
    }
  });

  // index.js
  var ChitterApi = require_chitterApi();
  var ChitterModel = require_chitterModel();
  var ChitterView = require_chitterView();
  var model = new ChitterModel();
  console.log(model.getPeeps());
  var api = new ChitterApi();
  var view = new ChitterView(model, api);
  view.displayPeeps();
  view.displayPeepsById();
  view.registerUser();
})();
