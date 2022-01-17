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
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((data) => data.json()).then((data) => {
            callback(data);
          });
        }
      };
      module.exports = ChitterApi2;
    }
  });

  // chitterView.js
  var require_chitterView = __commonJS({
    "chitterView.js"(exports, module) {
      var ChitterApi2 = require_chitterApi();
      var ChitterView2 = class {
        constructor(api2) {
          this.api = api2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.viewButton = document.querySelector("#view-peeps-button");
          this.viewButton.addEventListener("click", () => {
            this.api.loadPeeps(this.displayPeeps);
          });
        }
        displayPeeps(peeps) {
          console.log(peeps);
          peeps.forEach((peep) => {
            const peepEl = document.createElement("div");
            peepEl.innerText = peep.body + peep.user.handle;
            console.log(peepEl.innerHTML);
            peepEl.className = "peep";
            document.querySelector("#main-container").append(peepEl);
            console.log(document.querySelector(".peep").innerHTML);
          });
        }
      };
      module.exports = ChitterView2;
    }
  });

  // index.js
  var ChitterApi = require_chitterApi();
  var ChitterView = require_chitterView();
  var api = new ChitterApi();
  var view = new ChitterView(api);
})();
