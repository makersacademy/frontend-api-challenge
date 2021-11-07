var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// fetchPeeps.js
var require_fetchPeeps = __commonJS({
  "fetchPeeps.js"(exports2, module2) {
    fetchPeeps = (onceFetched) => {
      fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((jsonData) => {
        onceFetched(jsonData);
      });
    };
    module2.exports = fetchPeeps;
  }
});

// index.js
var fetchPeeps2 = require_fetchPeeps();
fetchPeeps2((jsonData) => {
  jsonData.forEach((element) => createElement(element));
});
createElement = (element) => {
  newDiv = document.createElement("div");
  newContent = document.createTextNode(`On ${element["created_at"]}, ${element["user"]["handle"]} posted: ${element["body"]}`);
  newDiv.className = "post";
  idNumber = document.querySelectorAll(".post").length + 1;
  newDiv.id = "post-" + idNumber;
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv);
};
