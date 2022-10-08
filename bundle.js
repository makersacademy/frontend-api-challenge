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
        }
        getPeeps = () => {
          return this.peeps;
        };
        setPeeps = (peeps) => {
          this.peeps = peeps;
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
        }
        renderPeeps = (peeps) => {
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
          peepBodyWrapper.classList.add(
            "flex-1",
            "border",
            "rounded-lg",
            "px-4",
            "py-2",
            "sm:px-6",
            "sm:py-4",
            "leading-relaxed",
            "bg-gradient-to-r",
            "from-blue-100",
            "to-blue-300"
          );
          let peepStrong = document.createElement("strong");
          peepStrong.innerText = "@" + peep.user.handle;
          let peepSpan = document.createElement("span");
          peepSpan.classList.add("float-right", "text-xs", "text-gray-400");
          peepSpan.innerText = peep.created_at;
          let peepBody = document.createElement("p");
          peepBody.classList.add("text-sm");
          peepBody.innerText = peep.body;
          peepBodyWrapper.appendChild(peepStrong);
          peepBodyWrapper.appendChild(peepSpan);
          peepBodyWrapper.appendChild(peepBody);
          peepItem.appendChild(peepBodyWrapper);
          peepList.appendChild(peepItem);
        };
        loadPeeps = () => {
          this.api.getPeeps((peeps) => {
            this.model.setPeeps(peeps);
            this.renderPeeps(peeps);
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
