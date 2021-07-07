const url = 'https://chitter-backend-api.herokuapp.com/peeps'

function listAllPeeps(url){
  fetch(url)
  .then(function(response) {
    return response.json();
    })
    .then(function(myJson) {
      myJson.forEach(function(item) {
      ul = document.getElementById('allPeepsList')
      li = document.createElement('li')
      li.innerHTML = item["body"] + ':' + item['user']['handle']
      ul.appendChild(li)
    })
  });
}

function generateRandomNumber(min , max) {
    let peep = Math.random() * (max-min) + min
    return Math.floor(peep)
}

function randomPeep() {
  var peep = generateRandomNumber(0,50)
  peepLink = url + '/' + peep
  fetch(peepLink)
  .then(function(response) {
    return response.json();
    })
    .then(function(myJson) {
    div = document.getElementById('randPeep')
    div.innerHTML = myJson['body']
  });
}
