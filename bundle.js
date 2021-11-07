(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // lib/display/displayPeeps.js
  var require_displayPeeps = __commonJS({
    "lib/display/displayPeeps.js"(exports, module) {
      var displayPeeps2 = (jsonData) => {
        let count = 0;
        let time_now = new Date();
        let peep_area = document.querySelector("#rightColumn");
        peep_area.innerHTML = "";
        while (count < 50) {
          let right_section = document.createElement("div");
          right_section.setAttribute("class", "peep_right");
          let card = document.createElement("div");
          card.setAttribute("id", `peep_${count}`);
          card.setAttribute("class", "peep_card");
          let image = document.createElement("img");
          image.setAttribute("id", `peep_photo_${count}`);
          image.setAttribute("src", "./profile.png");
          image.setAttribute("class", "peep_photo");
          let author = document.createElement("p");
          author.innerText = jsonData[count]["user"]["handle"];
          let content = document.createElement("p2");
          content.innerText = jsonData[count]["body"];
          let time_box = document.createElement("p");
          let peep_time = new Date(jsonData[count]["created_at"]);
          let ms_ago = time_now - peep_time;
          if (ms_ago < 6e4) {
            let s_ago = Math.floor(ms_ago / 1e3);
            time_box.innerText = `posted ${s_ago} second(s) ago`;
          } else if (ms_ago < 36e5) {
            let mi_ago = Math.floor(ms_ago / 6e4);
            time_box.innerText = `posted ${mi_ago} minute(s) ago`;
          } else if (ms_ago < 864e5) {
            let h_ago = Math.floor(ms_ago / 36e5);
            time_box.innerText = `posted ${h_ago} hour(s) ago`;
          } else {
            let d_ago = Math.floor(ms_ago / 864e5);
            time_box.innerText = `posted ${d_ago} day(s) ago`;
          }
          peep_area.appendChild(card);
          card.appendChild(image);
          card.appendChild(right_section);
          right_section.appendChild(author);
          right_section.appendChild(content);
          right_section.appendChild(time_box);
          count += 1;
        }
      };
      module.exports = displayPeeps2;
    }
  });

  // lib/fetches/authLogin.js
  var require_authLogin = __commonJS({
    "lib/fetches/authLogin.js"() {
      authLogin = (username, password) => {
        fetch("https://chitter-backend-api-v2.herokuapp.com/sessions", {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "session": {
              "handle": `${username}`,
              "password": `${password}`
            }
          })
        }).then((response) => response.json()).then((data) => {
          if (data.errors === void 0) {
            createPeep(data);
          } else {
            throwError(data);
          }
        });
      };
    }
  });

  // lib/display/displayLogin.js
  var require_displayLogin = __commonJS({
    "lib/display/displayLogin.js"(exports, module) {
      var authLogin2 = require_authLogin();
      var displayLogin3 = (throwError3, createPeep3) => {
        let left_column = document.querySelector("#leftColumn");
        left_column.innerHTML = "";
        let basic_welcome_message = document.createElement("div");
        basic_welcome_message.setAttribute("id", "basicWelcomeMessage");
        basic_welcome_message.innerText = "Please log in to continue:";
        let un_text = document.createElement("div");
        un_text.innerText = "Username:";
        let un_input = document.createElement("input");
        un_input.setAttribute("id", "unInput");
        un_input.setAttribute("type", "text");
        let pw_text = document.createElement("div");
        pw_text.innerText = "Password:";
        let pw_input = document.createElement("input");
        pw_input.setAttribute("id", "pwInput");
        pw_input.setAttribute("type", "password");
        let btn_login = document.createElement("button");
        btn_login.setAttribute("id", "btnLogin");
        btn_login.setAttribute("class", "button2");
        btn_login.innerText = "Login";
        let reg_link = document.createElement("a");
        reg_link.innerText = "Register now";
        reg_link.setAttribute("id", "regLink");
        reg_link.setAttribute("href", "javascript:void(0);");
        reg_link.setAttribute("onclick", `displayRegister();`);
        let account_txt = document.createElement("div");
        account_txt.setAttribute("id", "accountTxt");
        account_txt.innerText = "Don't have an account? ";
        account_txt.appendChild(reg_link);
        left_column.appendChild(basic_welcome_message);
        let lb2 = document.createElement("br");
        left_column.appendChild(lb2);
        left_column.appendChild(un_text);
        left_column.appendChild(un_input);
        let lb3 = document.createElement("br");
        left_column.appendChild(lb3);
        let lb4 = document.createElement("br");
        left_column.appendChild(lb4);
        left_column.appendChild(pw_text);
        left_column.appendChild(pw_input);
        let lb5 = document.createElement("br");
        left_column.appendChild(lb5);
        let lb6 = document.createElement("br");
        left_column.appendChild(lb6);
        left_column.appendChild(btn_login);
        let lb7 = document.createElement("br");
        left_column.appendChild(lb7);
        let lb8 = document.createElement("br");
        left_column.appendChild(lb8);
        let lb9 = document.createElement("br");
        left_column.appendChild(lb9);
        left_column.appendChild(account_txt);
        btn_login.addEventListener("click", () => {
          let username = document.querySelector("#unInput").value;
          let password = document.querySelector("#pwInput").value;
          authLogin2(username, password);
        });
      };
      module.exports = displayLogin3;
    }
  });

  // lib/fetches/getPeeps.js
  var require_getPeeps = __commonJS({
    "lib/fetches/getPeeps.js"(exports, module) {
      getPeeps = (displayPeeps2) => {
        fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((data) => displayPeeps2(data));
      };
      module.exports = getPeeps;
    }
  });

  // lib/throwError.js
  var require_throwError = __commonJS({
    "lib/throwError.js"(exports, module) {
      var throwError3 = (data) => {
        let error_message = document.createElement("div");
        error_message.innerText = data.errors.password;
        let message = document.querySelector("#basicWelcomeMessage");
        message.appendChild(error_message);
      };
      module.exports = throwError3;
    }
  });

  // lib/fetches/postPeep.js
  var require_postPeep = __commonJS({
    "lib/fetches/postPeep.js"(exports, module) {
      postPeep = (session_id, session_key) => {
        fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
          method: "post",
          headers: {
            "Authorization": `Token token=${session_key}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "peep": {
              "user_id": `${session_id}`,
              "body": document.querySelector("#textArea").value
            }
          })
        });
      };
      module.exports = postPeep;
    }
  });

  // lib/display/createPeep.js
  var require_createPeep = __commonJS({
    "lib/display/createPeep.js"(exports, module) {
      var postPeep2 = require_postPeep();
      var getPeeps3 = require_getPeeps();
      var displayPeeps2 = require_displayPeeps();
      var createPeep3 = (session) => {
        let session_id = session.user_id;
        let session_key = session.session_key;
        let username = document.querySelector("#unInput").value;
        let left_column = document.querySelector("#leftColumn");
        left_column.innerHTML = "";
        let lb1 = document.createElement("br");
        left_column.appendChild(lb1);
        let logged_in_welcome_message = document.createElement("div");
        logged_in_welcome_message.setAttribute("id", "loggedInWelcomeMessage");
        logged_in_welcome_message.innerHTML = `Welcome, ${username}`;
        left_column.appendChild(logged_in_welcome_message);
        let lb2 = document.createElement("br");
        left_column.appendChild(lb2);
        let text_instructions = document.createElement("div");
        text_instructions.setAttribute("id", "textInstructions");
        text_instructions.innerHTML = "Write a peep below:";
        left_column.appendChild(text_instructions);
        let lb3 = document.createElement("br");
        left_column.appendChild(lb3);
        let text_area = document.createElement("textarea");
        text_area.setAttribute("id", "textArea");
        left_column.appendChild(text_area);
        let lb4 = document.createElement("br");
        left_column.appendChild(lb4);
        let btn_post = document.createElement("button");
        btn_post.setAttribute("id", "btnPost");
        btn_post.setAttribute("class", "button");
        btn_post.innerHTML = "Post peep";
        left_column.appendChild(btn_post);
        btn_post.addEventListener("click", () => {
          postPeep2(session_id, session_key);
          getPeeps3(displayPeeps2);
        });
      };
      module.exports = createPeep3;
    }
  });

  // lib/fetches/attemptRegister.js
  var require_attemptRegister = __commonJS({
    "lib/fetches/attemptRegister.js"(exports, module) {
      var displayLogin3 = require_displayLogin();
      attemptRegister = (username, password) => {
        fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "user": {
              "handle": `${username}`,
              "password": `${password}`
            }
          })
        });
        displayLogin3();
      };
      module.exports = attemptRegister;
    }
  });

  // lib/display/displayRegister.js
  var require_displayRegister = __commonJS({
    "lib/display/displayRegister.js"(exports, module) {
      attemptRegister = require_attemptRegister();
      displayLogin = require_displayLogin();
      displayRegister = () => {
        let left_column = document.querySelector("#leftColumn");
        left_column.innerHTML = "";
        let basic_welcome_message = document.createElement("div");
        basic_welcome_message.setAttribute("id", "basicWelcomeMessage");
        basic_welcome_message.innerText = "Please Register below:";
        let un_text = document.createElement("div");
        un_text.innerText = "Username:";
        let un_input = document.createElement("input");
        un_input.setAttribute("id", "unInput");
        un_input.setAttribute("type", "text");
        let pw_text = document.createElement("div");
        pw_text.innerText = "Password:";
        let pw_input = document.createElement("input");
        pw_input.setAttribute("id", "pwInput");
        pw_input.setAttribute("type", "password");
        let btn_submit = document.createElement("button");
        btn_submit.setAttribute("id", "btnSubmit");
        btn_submit.setAttribute("class", "button2");
        btn_submit.innerText = "Register";
        left_column.appendChild(basic_welcome_message);
        let lb2 = document.createElement("br");
        left_column.appendChild(lb2);
        left_column.appendChild(un_text);
        left_column.appendChild(un_input);
        let lb3 = document.createElement("br");
        left_column.appendChild(lb3);
        let lb4 = document.createElement("br");
        left_column.appendChild(lb4);
        left_column.appendChild(pw_text);
        left_column.appendChild(pw_input);
        let lb5 = document.createElement("br");
        left_column.appendChild(lb5);
        let lb6 = document.createElement("br");
        left_column.appendChild(lb6);
        left_column.appendChild(btn_submit);
        let lb7 = document.createElement("br");
        left_column.appendChild(lb7);
        let lb8 = document.createElement("br");
        left_column.appendChild(lb8);
        let lb9 = document.createElement("br");
        left_column.appendChild(lb9);
        btn_submit.addEventListener("click", () => {
          let username = document.querySelector("#unInput").value;
          let password = document.querySelector("#pwInput").value;
          attemptRegister(username, password);
        });
      };
      module.exports = displayRegister;
    }
  });

  // index.js
  var displayPeeps = require_displayPeeps();
  var displayLogin2 = require_displayLogin();
  var getPeeps2 = require_getPeeps();
  var throwError2 = require_throwError();
  var createPeep2 = require_createPeep();
  var displayRegister2 = require_displayRegister();
  getPeeps2(displayPeeps);
  displayLogin2(throwError2, createPeep2);
})();
