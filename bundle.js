(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // lib/chitterApi.js
  var require_chitterApi = __commonJS({
    "lib/chitterApi.js"(exports, module) {
      var ChitterApi2 = class {
        constructor() {
          this.baseUrl = "https://chitter-backend-api-v2.herokuapp.com/";
        }
        getPeeps = (callback) => {
          fetch(this.baseUrl + "peeps").then((response) => response.json()).then((data) => {
            callback(data);
          });
        };
        createUser = (handle, password, callback) => {
          fetch(this.baseUrl + "/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ user: { handle, password } })
          }).then((response) => response.json()).then((data) => {
            callback(data);
          });
        };
        createSession = (handle, password, callback) => {
          fetch(this.baseUrl + "sessions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ session: { handle, password } })
          }).then((response) => response.json()).then((data) => {
            callback(data);
          });
        };
        createPeep = (user_id, peep, callback) => {
          fetch(this.baseUrl + "peeps", {
            method: "POST",
            headers: {
              Authorization: "Token token=a_valid_session_key",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ peep: { user_id, body: peep } })
          }).then((response) => response.json()).then((data) => {
            callback(data);
          });
        };
      };
      module.exports = ChitterApi2;
    }
  });

  // lib/chitterModel.js
  var require_chitterModel = __commonJS({
    "lib/chitterModel.js"(exports, module) {
      var ChitterModel2 = class {
        constructor() {
          this.peeps = [];
          this.session = {};
        }
        getPeeps = () => {
          return this.peeps;
        };
        setPeeps = (peeps) => {
          this.peeps = peeps;
        };
        setSession = (session) => {
          this.session = session;
        };
      };
      module.exports = ChitterModel2;
    }
  });

  // lib/chitterView.js
  var require_chitterView = __commonJS({
    "lib/chitterView.js"(exports, module) {
      var ChitterView2 = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          this.logBtn = document.getElementById("log-btn");
          this.logBtn.addEventListener("click", () => {
            this.login();
          });
        }
        renderPeeps = () => {
          const peeps = this.model.getPeeps();
          const peepList = document.getElementById("peeps");
          peepList.innerHTML = "";
          peeps.forEach((peep) => {
            this.stylePeep(peep, peepList);
          });
        };
        stylePeep = (peep, peepList) => {
          let peepItem = document.createElement("div");
          peepItem.classList.add("flex");
          let peepBodyWrapper = document.createElement("div");
          peepBodyWrapper.classList.add("peepBody");
          let peepStrong = document.createElement("strong");
          peepStrong.classList.add("text-blue-900");
          peepStrong.innerText = "@" + peep.user.handle;
          let peepSpan = document.createElement("span");
          peepSpan.classList.add("float-right", "text-xs", "text-gray-400");
          peepSpan.innerText = peep.created_at;
          let peepBody = document.createElement("p");
          peepBody.classList.add("text-sm", "text-blue-700");
          peepBody.textContent = peep.body;
          peepBodyWrapper.appendChild(peepStrong);
          peepBodyWrapper.appendChild(peepSpan);
          peepBodyWrapper.appendChild(peepBody);
          peepItem.appendChild(peepBodyWrapper);
          peepList.appendChild(peepItem);
        };
        loadPeeps = () => {
          this.api.getPeeps((peeps) => {
            this.model.setPeeps(peeps);
            this.renderPeeps();
          });
        };
        login = (handle, password) => {
          this.api.createSession(handle, password, (data) => {
            this.model.setSession(data);
          });
        };
      };
      module.exports = ChitterView2;
    }
  });

  // index.js
  var ChitterApi = require_chitterApi();
  var ChitterModel = require_chitterModel();
  var ChitterView = require_chitterView();
  var model = new ChitterModel();
  var api = new ChitterApi();
  var view = new ChitterView(model, api);
  view.loadPeeps();
  console.log("The Chitter app has loaded");
})();
