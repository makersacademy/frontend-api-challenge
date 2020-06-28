async function requestPeipje(id) {
  await fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${id}`)
  .then(response => out = response.json())
  console.log(out)
  return out
};

function peipjeID(id) {
  requestPeipje(id).then(function(data) {
    var peipBody = `<div id="body">Peipje: ${data.body}</div>`
    var peipUser = `<div id="user">User: ${data.user.handle}</div>`
    var peipTime = `<div id="time">Time: ${data.created_at}</div>`
    var peipjeData = peipUser + peipTime + peipBody
    document.getElementById('mainDisplay').innerHTML = peipjeData
  })
}
