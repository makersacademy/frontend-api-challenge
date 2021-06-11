document.addEventListener("DOMContentLoaded", () => {
  fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      document.querySelector('#current-quacks').innerText = data
    });
})