const { createUser } = require('./src/addUser')
const { viewPeeps } = require('./src/viewPeeps')
const { postPeep } = require('./src/postPeep')
const { login } = require('./src/login')

document.querySelector("#show-login").addEventListener("click", () => {
  document.querySelector(".popup-login").classList.add("active");
  document.querySelector("#login").addEventListener('click', (event) => {
    let handle = document.querySelector("#handle").value
    let password = document.querySelector("#password").value
    login(handle, password);
    document.querySelector(".popup-login").classList.remove("active");
  })
});

document.querySelector("#show-signup").addEventListener("click", () => {
  document.querySelector(".popup-signup").classList.add("active");
  document.querySelector("#signup").addEventListener('click', (event) => {
    let handle = document.querySelector("#signup-handle").value
    let password = document.querySelector("#signup-password").value
    createUser(handle, password);
    document.querySelector(".popup-signup").classList.remove("active")
  })
});

document.querySelector(".popup-login .close-btn").addEventListener("click", () => {
  document.querySelector(".popup-login").classList.remove("active");
});

document.querySelector(".popup-signup .close-btn").addEventListener("click", () => {
  document.querySelector(".popup-signup").classList.remove("active");
});

login(sessionStorage.getItem("handle"), sessionStorage.getItem("password"))

viewPeeps();

const peep_button = document.querySelector('#post')
peep_button.addEventListener('click', () => {
  console.log(document.querySelector('#peep_body').value)
  postPeep(document.querySelector('#peep_body').value)
})

document.querySelector('#post').style.display = "none"
document.querySelector('.peep').style.display = "none"
