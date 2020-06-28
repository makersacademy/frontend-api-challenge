async function requestPeipjesList() {
  await fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
  .then(response => out = response.json())
  return out
};

function peipjesList() {

  requestPeipjesList().then(function(data) {
    list = '<ul>'
    for (i=0; i < data.length; i ++) {
      var peipbody = `<div id="peip${i}/body">${data[i].body}</div>`
      var peipuser = `<div id="peip${i}/user">${data[i].user.handle}</div>`
      list += `<a href="#peipje/${i}"><li id="peip${i}">${peipuser}${peipbody}</li></a>`
    }
    list += `</ul>`
    document.getElementById('mainDisplay').innerHTML = list
  })
}
