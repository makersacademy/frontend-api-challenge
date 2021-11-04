(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // api_requests/viewingPeeps.js
  var require_viewingPeeps = __commonJS({
    "api_requests/viewingPeeps.js"(exports, module) {
      var viewingPeeps2 = (callBack) => {
        fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((data) => {
          callBack(data);
        });
      };
      module.exports = viewingPeeps2;
    }
  });

  // index.js
  var viewingPeeps = require_viewingPeeps();
  var content = () => {
    document.createElement("div");
  };
  content();
  viewingPeeps((data) => {
    data.forEach((x) => {
      console.log(x);
      document.write(x.body);
      let div = document.createElement("div");
      div.innerText = x.body;
      div.id = `peep${x.id}`;
      div.class = "peep";
      document.body.appendChild(div);
    });
  });
})();
