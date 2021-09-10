"use strict";

class OnePeep {
  getPeep(id) {
    return fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${id}`)
      .then((response) => response.json())
      .then((peep) => {
        let onePeep = peep.body;
        document.querySelector("#onePeep").innerHTML = onePeep;
      });
  }
}
