function peipjeNumber(number) {
  requestPeipjesList().then(function(data) {
    var peipBody = `<div id="body">Peipje: ${data[number].body}</div>`
    var peipUser = `<div id="user">User: ${data[number].user.handle}</div>`
    var peipTime = `<div id="time">Time: ${data[number].created_at}</div>`
    var peipjeData = peipUser + peipTime + peipBody
    document.getElementById('mainDisplay').innerHTML = peipjeData
  })
}
