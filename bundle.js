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
        logInSession(handle, password) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ session: { handle, password } })
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

  // userModel.js
  var require_userModel = __commonJS({
    "userModel.js"(exports, module) {
      var UserModel2 = class {
        constructor() {
          this.user = {};
        }
        getUser() {
          return this.user;
        }
        addUser(username, password) {
          this.user = { handle: username, password };
        }
        setUsers(users) {
          this.users = users;
        }
        reset() {
          this.users = [];
        }
      };
      module.exports = UserModel2;
    }
  });

  // userView.js
  var require_userView = __commonJS({
    "userView.js"(exports, module) {
      var UserView2 = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          this.signUpBtn = document.querySelector("#sign-up-button");
          this.logInBtn = document.querySelector("#log-in-button");
          this.username = document.querySelector("#username-input");
          this.password = document.querySelector("#password-input");
          this.signUpBtn.addEventListener("click", () => {
            this.signUp();
          });
          this.logInBtn.addEventListener("click", () => {
            this.logIn();
          });
        }
        signUp() {
          this.api.createUser(this.username.value, this.password.value);
        }
        logIn() {
          this.api.logInSession(this.username.value, this.password.value);
        }
        showCurrentUser() {
        }
      };
      module.exports = UserView2;
    }
  });

  // index.js
  var ChitterApi = require_api();
  var PeepModel = require_peepModel();
  var PeepView = require_peepView();
  var UserModel = require_userModel();
  var UserView = require_userView();
  var model = new PeepModel();
  var api = new ChitterApi();
  var userModel = new UserModel();
  model.addPeep({
    id: 1494,
    body: "First peep",
    created_at: "2022-08-20T11:33:02.912Z",
    updated_at: "2022-08-20T11:33:02.912Z",
    user: { id: 1124, handle: "jony144" },
    likes: [{ user: { id: 1120, handle: "margaritapeter" } }]
  });
  var view = new PeepView(model, api);
  var userView = new UserView(userModel, api);
  view.displayPeepsFromApi();
  api.createUser("InitalUserTest", "InitalPasswordTest");
})();
