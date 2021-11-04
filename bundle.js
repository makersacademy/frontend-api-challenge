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
  var peepContainer = () => {
    let container = document.createElement("div");
    container.id = "peepContainer";
    container.classList.add("container");
    document.body.appendChild(container);
  };
  peepContainer();
  viewingPeeps((data) => {
    data.forEach((x) => {
      console.log(x);
      let div = document.createElement("div");
      div.innerText = x.body;
      div.id = `peep${x.id}`;
      div.class = "peep";
      document.getElementById("peepContainer").appendChild(div);
    });
  });
})();
