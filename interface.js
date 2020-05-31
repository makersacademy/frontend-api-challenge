'use strict';

let header = document.createElement('h1')
header.innerHTML = 'Chitter'

fetch('https://chitter-backend-api-v2.herokuapp.com/peeps.json')
  .then(response => response.json())
  .then(function(data) {
  document.body.appendChild(header)
  let chitter = data
  return chitter.map(function(peep) {
    let user = document.createElement('p')
    let list = document.createElement('a')
    let br = document.createElement('br')
    user.innerHTML = `${peep.user["handle"]}`
    list.setAttribute('href', '/')
    list.setAttribute('class', 'peep')
    list.innerHTML = `${peep.body}`
    document.body.appendChild(user)
    document.body.appendChild(list)
    document.body.appendChild(br)
  })
})
