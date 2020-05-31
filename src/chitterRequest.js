'use strict';

class ChitterRequest {
  constructor() {}

  getPeeps() {
    let peepsResult = new Promise(function(resolve) {
      $.ajax({
        url: 'https://chitter-backend-api-v2.herokuapp.com/peeps',
        method: 'GET',
        success: function(result) {
          let peepList = []
          result.forEach(function(peepJSON) {
            peepList.push(new Peep(peepJSON.body))
          })
          resolve(peepList)
        }
      })
    })
    return peepsResult
  }
}