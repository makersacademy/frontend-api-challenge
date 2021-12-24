(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/addUser.js
  var require_addUser = __commonJS({
    "src/addUser.js"(exports, module) {
      var createUser2 = (handle, password) => {
        data = { "user": { "handle": `${handle}`, "password": `${password}` } };
        fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }).then((response) => response.json()).then((data2) => {
          console.log(data2);
          alert("User successfully created.");
        });
      };
      module.exports.createUser = createUser2;
    }
  });

  // src/viewPeeps.js
  var require_viewPeeps = __commonJS({
    "src/viewPeeps.js"(exports, module) {
      var viewPeeps2 = () => {
        let count = 1;
        fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((data2) => {
          data2.forEach((peep) => {
            const peep_div = document.createElement("div");
            peep_div.className = "peeps";
            peep_div.id = `peep-${count}`;
            const peep_body = document.createElement("div");
            peep_body.className = "peep-body";
            peep_body.innerText = peep.body;
            const posted_by = document.createElement("div");
            posted_by.className = "posted-by";
            posted_by.innerText = `posted by ${peep.user.handle}`;
            const likes = document.createElement("div");
            likes.className = "likes";
            likes.innerText = `likes: ${peep.likes.length}`;
            peep_div.append(peep_body);
            peep_div.append(posted_by);
            peep_div.append(likes);
            document.querySelector(".all_peeps").append(peep_div);
            count++;
          });
        });
      };
      module.exports.viewPeeps = viewPeeps2;
    }
  });

  // src/postPeep.js
  var require_postPeep = __commonJS({
    "src/postPeep.js"(exports, module) {
      var postPeep2 = (body) => {
        console.log(`Token token=${sessionStorage.getItem("key")}`);
        data = { "peep": { "user_id": `${sessionStorage.getItem("id")}`, "body": `${body}` } };
        fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
          method: "POST",
          headers: {
            "Authorization": `Token token=${sessionStorage.getItem("key")}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }).then((response) => response.json()).then((data2) => {
          console.log(data2);
          window.location.reload();
        });
      };
      module.exports.postPeep = postPeep2;
    }
  });

  // src/login.js
  var require_login = __commonJS({
    "src/login.js"(exports, module) {
      var login2 = (handle, password) => {
        sessionStorage.setItem("handle", `${handle}`);
        sessionStorage.setItem("password", `${password}`);
        data = { "session": { "handle": `${handle}`, "password": `${password}` } };
        fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }).then((response) => response.json()).then((data2) => {
          sessionStorage.setItem("id", data2.user_id);
          sessionStorage.setItem("key", data2.session_key);
          console.log(data2);
          alert("Successfully logged in.");
          window.location.reload();
        });
      };
      module.exports.login = login2;
    }
  });

  // index.js
  var { createUser } = require_addUser();
  var { viewPeeps } = require_viewPeeps();
  var { postPeep } = require_postPeep();
  var { login } = require_login();
  document.querySelector("#show-login").addEventListener("click", () => {
    document.querySelector(".popup-login").classList.add("active");
    document.querySelector("#login").addEventListener("click", (event) => {
      let handle = document.querySelector("#handle").value;
      let password = document.querySelector("#password").value;
      login(handle, password);
      document.querySelector(".popup-login").classList.remove("active");
    });
  });
  document.querySelector("#show-signup").addEventListener("click", () => {
    document.querySelector(".popup-signup").classList.add("active");
    document.querySelector("#signup").addEventListener("click", (event) => {
      let handle = document.querySelector("#signup-handle").value;
      let password = document.querySelector("#signup-password").value;
      createUser(handle, password);
      document.querySelector(".popup-signup").classList.remove("active");
    });
  });
  document.querySelector(".popup-login .close-btn").addEventListener("click", () => {
    document.querySelector(".popup-login").classList.remove("active");
  });
  document.querySelector(".popup-signup .close-btn").addEventListener("click", () => {
    document.querySelector(".popup-signup").classList.remove("active");
  });
  document.querySelector("#post").addEventListener("click", () => {
    postPeep(document.querySelector("#peep_body").value);
  });
  if (sessionStorage.getItem("handle") === null) {
    document.querySelectorAll(".user-sign-in").forEach(function(item) {
      item.style.display = "none";
    });
  } else {
    document.querySelectorAll(".user-signed-in").forEach(function(item) {
      item.style.display = "none";
    });
  }
  viewPeeps();
})();
