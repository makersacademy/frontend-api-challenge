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

  // index.js
  var ChitterApi = require_chitterApi();
  var api = new ChitterApi();
  api.loadPeeps((peeps) => {
    console.log(peeps);
  });
})();
