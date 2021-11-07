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

// newUser.js
var require_newUser = __commonJS({
  "newUser.js"() {
    updateServer = (element2) => {
      fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(element2)
      }).then((response) => response.json()).then((data) => {
        console.log("Success:", data);
      }).catch((error) => {
        console.error("Error:", error);
      });
    };
    var button = document.querySelector("#create-new-user");
    button.addEventListener("click", () => {
      handle = document.querySelector("#new-user-username").value;
      password = document.querySelector("#new-user-password").value;
      element = { "user": { "handle": `${handle}`, "password": `${password}` } };
      updateServer(element);
    });
  }
});

// index.js
var fetchPeeps2 = require_fetchPeeps();
var newUser = require_newUser();
fetchPeeps2((jsonData) => {
  jsonData.forEach((element2) => createElement(element2));
});
createElement = (element2) => {
  newDiv = document.createElement("div");
  newContent = document.createTextNode(`On ${element2["created_at"]}, ${element2["user"]["handle"]} posted: ${element2["body"]}`);
  newDiv.className = "post";
  idNumber = document.querySelectorAll(".post").length + 1;
  newDiv.id = "post-" + idNumber;
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv);
};
