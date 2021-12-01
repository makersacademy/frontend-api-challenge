(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // addUser.js
  var require_addUser = __commonJS({
    "addUser.js"(exports, module) {
      var createUser2 = (handle, password, callback) => {
        data = { "user": { "handle": `${handle}`, "password": `${password}` } };
        fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }).then((response) => response.json()).then((data2) => {
          console.log("Success:", data2);
          alert(data2.handle);
        });
      };
      module.exports.createUser = createUser2;
    }
  });

  // index.js
  var { createUser, fetchUsers } = require_addUser();
  var signup_button = document.querySelector("#signup");
  signup_button.addEventListener("click", () => {
    const form = document.createElement("form");
    const handle = document.createElement("input");
    const handle_label = document.createElement("label");
    const password = document.createElement("input");
    const password_label = document.createElement("label");
    const button = document.createElement("button");
    handle.id = "#handle";
    handle_label.innerText = "Username";
    handle.id = "#password";
    password_label.innerText = "Password";
    button.innerText = "Submit";
    form.appendChild(handle_label);
    form.appendChild(handle);
    form.appendChild(password_label);
    form.appendChild(password);
    form.appendChild(button);
    document.body.appendChild(form);
  });
  createUser("ben1230298", "pword", (data2) => {
    data2;
  });
})();
