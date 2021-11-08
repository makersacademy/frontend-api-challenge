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
    updateServer = (element) => {
      fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(element)
      }).then((response) => response.json()).then((data) => {
        console.log("Success:", data);
      }).catch((error) => {
        console.error("Error:", error);
      });
    };
    createSession = (element) => {
      fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(element)
      }).then((response) => response.json()).then((data) => {
        console.log("Session key is: ", data["session_key"]);
      }).catch((error) => {
        console.error("Error:", error);
      });
    };
    var button = document.querySelector("#create-new-user");
    button.addEventListener("click", () => {
      handle = document.querySelector("#new-user-username").value;
      password = document.querySelector("#new-user-password").value;
      userElement = { "user": { "handle": `${handle}`, "password": `${password}` } };
      updateServer(userElement);
      sessionElement = { "session": { "handle": `${handle}`, "password": `${password}` } };
      createSession(sessionElement);
    });
  }
});

// index.js
var fetchPeeps2 = require_fetchPeeps();
var newUser = require_newUser();
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
