(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // api_requests/createUser.js
  var require_createUser = __commonJS({
    "api_requests/createUser.js"(exports, module) {
      var createUser2 = (handleInput, passwordInput, callBack) => {
        let data = { "user": { "handle": handleInput, "password": passwordInput } };
        fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }).then((response) => response.json()).then((output) => {
          callBack(output);
        });
      };
      module.exports = createUser2;
    }
  });

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
  var createUser = require_createUser();
  var viewingPeeps = require_viewingPeeps();
  var peepContainer = () => {
    let container = document.createElement("div");
    container.id = "peepContainer";
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
  var newPeepContainer = () => {
    let newContainer = document.createElement("div");
    newContainer.id = "newPeepContainer";
    newContainer.classList.add("container");
    document.body.prepend(newContainer);
  };
  newPeepContainer();
  var createPeep = document.getElementById("createpeep");
  var peepBoxState = false;
  createPeep.addEventListener("click", () => {
    if (peepBoxState === false) {
      let peepBox = document.createElement("textarea");
      peepBox.setAttribute("type", "text");
      peepBox.id = "newPeep";
      peepBox.maxLength = 140;
      peepBox.placeholder = "What's on your mind?";
      document.getElementById("newPeepContainer").prepend(peepBox);
      let peepSubmit2 = document.createElement("BUTTON");
      peepSubmit2.innerText = "Send";
      peepSubmit2.id = "sendPeep";
      document.getElementById("newPeepContainer").prepend(peepSubmit2);
      peepBoxState = true;
    }
  });
  peepSubmit.addEventListener("click", () => {
    document.getElementById("newPeepContainer").removeChild();
  });
  createUser("handle470", "123456", (output) => {
    console.log(output);
  });
})();
