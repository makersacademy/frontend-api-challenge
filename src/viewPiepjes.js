async function requestPeipjesList() {
  await fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
  .then(response => out = response.json())
  return out
};

function peipjesList() {

  requestPeipjesList().then(function(data) {
    console.log(data[0])
    var peip0body = `<div id="peip0/body">${data[0].body}</div>`
    var peip0user = `<div id="peip0/user">${data[0].user.handle}</div>`
    document.getElementById('peipjesList').innerHTML = peip0body + peip0user
  })

}
