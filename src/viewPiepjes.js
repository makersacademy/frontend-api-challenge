async function requestPeipjesList() {
  await fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
  .then(response => out = response.json())
  console.log(out)
  return out
};

function peipjesList() {

  requestPeipjesList().then(function(data) {
    list = '<ul>'
    for (i=0; i < data.length; i ++) {
      var peipBody = `<div id="peip${i}/body">${data[i].body}</div>`
      var peipUser = `<div id="peip${i}/user">${data[i].user.handle}</div>`
      list += `<a href="#peipje/${i}"><li id="peip${i}">${peipUser}${peipBody}</li></a>`
    }
    list += `</ul>`
    document.getElementById('mainDisplay').innerHTML = list
  })
}
