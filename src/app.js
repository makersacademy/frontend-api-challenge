class App {

  getPeeps() {
    let arrayPeeps = [];
    var url = 'https://chitter-backend-api.herokuapp.com/peeps';
    $.get(url, function(data) {
      data.forEach(function(peep) {
        let newObject = new Peep(peep.id, peep.body, peep.created_at, peep.updated_at, peep.likes, peep.user.id, peep.user.handle)
        arrayPeeps.push(newObject)
        })
        arrayPeeps.forEach(function(peep) {
          var text = document.createTextNode(peep.body)
          var newItem = document.createElement('li')
          newItem.appendChild(text)
          document.getElementById('newPeeps').appendChild(newItem)
        })
      })
    }

    renderPeeps(peep) {

    }
  }
