var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// chitterApi.js
var require_chitterApi = __commonJS({
  "chitterApi.js"(exports, module) {
    var ChitterApi = class {
      loadPeeps(callback) {
        fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((data) => {
          callback(data);
        });
      }
      createUser(handle, password, callback) {
        const dataString = JSON.stringify({ "user": { "handle": handle, "password": password } });
        fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: dataString
        }).then((response) => response.json()).then((data) => {
          callback(data);
        });
      }
    };
    module.exports = ChitterApi;
  }
});

export {
  __commonJS,
  require_chitterApi
};
