const fetchPeeps = require('./fetchPeeps.js')

fetchPeeps((jsonData) => {
  jsonData.forEach(element =>
    createElement(element)
  )
})

createElement = (element) => {
  newDiv = document.createElement("div");
  // newContent.maxLength = "20"
  newContent = document.createTextNode(`On ${element['created_at']}, ${element['user']['handle']} posted: ${element['body']}`);
  newDiv.className = 'post';
  idNumber = document.querySelectorAll('.post').length + 1
  newDiv.id = 'post-' + idNumber;
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv);
}