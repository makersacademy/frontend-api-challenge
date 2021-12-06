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
          const success = document.createElement("P");
          success.innerText = "user successfully created";
          success.id = "success";
          document.body.appendChild(success);
          const del = () => {
            success.remove();
          };
          setTimeout(del, 2e3);
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
            const div = document.createElement("div");
            div.className = "peeps";
            const div1 = document.createElement("div");
            const div2 = document.createElement("div");
            const div3 = document.createElement("div");
            div.className = "peeps";
            div.id = `peep-${count}`;
            div1.className = "peep_body";
            div1.innerText = peep.body;
            div3.className = "liked by";
            div3.innerText = `posted_by ${data2.user_id}`;
            div2.className = "likes";
            div2.innerText = data2.likes;
            div.append(div1);
            div.append(div2);
            div.append(div3);
            document.body.append(div);
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
          const div = document.createElement("p");
          div.innerText = data2.body;
          document.querySelector("#peep-1").insertBefore(div);
        });
      };
      module.exports.postPeep = postPeep2;
    }
  });

  // src/login.js
  var require_login = __commonJS({
    "src/login.js"(exports, module) {
      callback = (data2) => {
        data2;
      };
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
          document.querySelector("#welcome").innerText = `Wow, you're back so soon. Let's get peeping!`;
          document.querySelector("#signup").style.display = "none";
          document.querySelector("#login").style.display = "none";
          document.querySelector("#post").style.display = "";
          document.querySelector(".peep").style.display = "";
          const success = document.createElement("P");
          success.innerText = "successfully logged in";
          success.id = "success";
          document.body.appendChild(success);
          const del = () => {
            success.remove();
          };
          setTimeout(del, 2e3);
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
  callback = (data2) => {
    data2;
  };
  login(sessionStorage.getItem("handle"), sessionStorage.getItem("password"));
  var signup_button = document.querySelector("#signup");
  signup_button.addEventListener("click", () => {
    let form = document.createElement("form");
    let handle = document.createElement("input");
    let handle_label = document.createElement("label");
    let password = document.createElement("input");
    let password_label = document.createElement("label");
    let button = document.createElement("button");
    handle.id = "handle";
    handle_label.innerText = "Username";
    handle.id = "password";
    password_label.innerText = "Password";
    button.innerText = "Submit";
    button.id = "submit";
    form.appendChild(handle_label);
    form.appendChild(handle);
    form.appendChild(password_label);
    form.appendChild(password);
    form.appendChild(button);
    document.body.appendChild(form);
    form.id = "signup-form";
    button.addEventListener("click", (event) => {
      event.preventDefault();
      createUser(handle.value, password.value);
      callback(document.querySelector("#signup-form").remove());
      return false;
    });
  });
  var login_button = document.querySelector("#login");
  login_button.addEventListener("click", () => {
    let form = document.createElement("form");
    let handle = document.createElement("input");
    let handle_label = document.createElement("label");
    let password = document.createElement("input");
    let password_label = document.createElement("label");
    let button = document.createElement("button");
    handle.id = "handle";
    handle_label.innerText = "Username";
    handle.id = "password";
    password_label.innerText = "Password";
    button.innerText = "Submit";
    button.id = "submit";
    form.appendChild(handle_label);
    form.appendChild(handle);
    form.appendChild(password_label);
    form.appendChild(password);
    form.appendChild(button);
    document.body.appendChild(form);
    form.id = "login-form";
    button.addEventListener("click", (event) => {
      event.preventDefault();
      login(handle.value, password.value);
      callback(document.querySelector("#login-form").remove());
      return false;
    });
  });
  viewPeeps();
  var peep_button = document.querySelector("#post");
  peep_button.addEventListener("click", () => {
    console.log(document.querySelector("#peep_body").value);
    postPeep(document.querySelector("#peep_body").value);
  });
  document.querySelector("#post").style.display = "none";
  document.querySelector(".peep").style.display = "none";
})();
