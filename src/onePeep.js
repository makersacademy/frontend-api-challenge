"use strict";

class OnePeep {
  async getPeep(id) {
    const response = await fetch(
      `https://chitter-backend-api-v2.herokuapp.com/peeps/${id}`
    );
    const peep = await response.json();
    let onePeep = peep.body;
    document.querySelector("#onepeep").innerHTML = onePeep;
  }
}
