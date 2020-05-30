'use strict';

class ChitterRequest {
  constructor() {}

  async getPeeps() {
    const peepsResult = await $.ajax({
      url: 'https://chitter-backend-api-v2.herokuapp.com/peeps',
      method: 'GET',
      success: function(result) {
        return result
      }
    })
    return peepsResult;
  }
}