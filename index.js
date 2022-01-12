const { createUser } = require('./src/addUser')
const { viewPeeps } = require('./src/viewPeeps')
const { postPeep } = require('./src/postPeep')
const { login } = require('./src/login')

// Login box appears and user is logged in with credentials
document.querySelector("#show-login").addEventListener("click", () => {
  document.querySelector(".popup-login").classList.add("active");
  document.querySelector("#login").addEventListener('click', (event) => {
    let handle = document.querySelector("#handle").value
    let password = document.querySelector("#password").value
    login(handle, password);
    document.querySelector(".popup-login").classList.remove("active");
  })
});

// Sign up box appears and account is created with credentials
document.querySelector("#show-signup").addEventListener("click", () => {
  document.querySelector(".popup-signup").classList.add("active");
  document.querySelector("#signup").addEventListener('click', (event) => {
    let handle = document.querySelector("#signup-handle").value
    let password = document.querySelector("#signup-password").value
    createUser(handle, password);
    document.querySelector(".popup-signup").classList.remove("active")
  })
});

// Close login box if x clicked
document.querySelector(".popup-login .close-btn").addEventListener("click", () => {
  document.querySelector(".popup-login").classList.remove("active");
});

// Close singup box if x clicked
document.querySelector(".popup-signup .close-btn").addEventListener("click", () => {
  document.querySelector(".popup-signup").classList.remove("active");
});

// Post a new peep if the button is clicked
document.querySelector('#post').addEventListener('click', () => {
  postPeep(document.querySelector('#peep_body').value)
})

// Hiding and showing depending on whether user is logged in
if (sessionStorage.getItem("handle") === null) {
  document.querySelectorAll(".user-sign-in").forEach(function(item) {
    item.style.display = "none"
  })
} else {
  document.querySelectorAll(".user-signed-in").forEach(function(item) {
    item.style.display = "none"
  })
};

viewPeeps();
