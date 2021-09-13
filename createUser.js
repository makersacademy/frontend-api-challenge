const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  createUser(
    document.getElementById("username").value,
    document.getElementById("password").value
  );
});

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  // .then((response) => response.json())
  // .then((data) => console.log(data));
}

function createUser(username, password) {
  postData(
    "https://chitter-backend-api-v2.herokuapp.com/users",
    (data = {
      user: { handle: username, password: password },
    })
  );
  return alert(`user "${username}" created! :)`);
}

const login = document.getElementById("login");

login.addEventListener("click", function () {
  loginUser(
    document.getElementById("usernameForLogin").value,
    document.getElementById("passwordForLogin").value
  );
});

function loginUser(username, password) {
  postData(
    "https://chitter-backend-api-v2.herokuapp.com/sessions",
    (data = {
      session: { handle: username, password: password },
    })
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
  //   if (data.hasOwnProperty("errors")) {
  //     alert("login failed");
  //   } else {
  //     createSession(data, handle);
  //   }
}
