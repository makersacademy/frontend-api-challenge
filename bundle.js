(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // fetchPeeps.js
  var require_fetchPeeps = __commonJS({
    "fetchPeeps.js"(exports, module) {
      var fetchPeeps2 = () => {
        fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((data) => {
          data.forEach((peep) => {
            newPeep = document.createElement("div");
            newContent = document.createTextNode(`On ${peep["created_at"]}, ${peep["user"]["handle"]} posted: ${peep["body"]}`);
            newPeep.className = "post";
            idNumber = document.querySelectorAll(".post").length + 1;
            newPeep.id = "post-" + idNumber;
            newPeep.appendChild(newContent);
            document.body.appendChild(newPeep);
          });
        });
      };
      module.exports = fetchPeeps2;
    }
  });

  // index.js
  var fetchPeeps = require_fetchPeeps();
  fetchPeeps();
})();
