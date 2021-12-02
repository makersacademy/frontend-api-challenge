(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // addUser.js
  var require_addUser = __commonJS({
    "addUser.js"(exports, module) {
      var createUser = (handle, password) => {
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
      module.exports.createUser = createUser;
    }
  });

  // index.js
  var require_frontend_api_challenge = __commonJS({
    "index.js"(exports, module) {
      var { createUser } = require_addUser();
      callback = (data2) => {
        data2;
      };
      var button = document.querySelector("#signup");
      button.addEventListener("click", () => {
        let form = document.createElement("form");
        let handle = document.createElement("input");
        let handle_label = document.createElement("label");
        let password = document.createElement("input");
        let password_label = document.createElement("label");
        let button2 = document.createElement("button");
        handle.id = "handle";
        handle_label.innerText = "Username";
        handle.id = "password";
        password_label.innerText = "Password";
        button2.innerText = "Submit";
        button2.id = "submit";
        form.appendChild(handle_label);
        form.appendChild(handle);
        form.appendChild(password_label);
        form.appendChild(password);
        form.appendChild(button2);
        document.body.appendChild(form);
        form.id = "form-1";
        button2.addEventListener("click", (event) => {
          event.preventDefault();
          createUser(handle.value, password.value);
          callback(document.querySelector("#form-1").remove());
          return false;
        });
      });
      module.exports.button = button;
    }
  });
  require_frontend_api_challenge();
})();
