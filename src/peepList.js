"use strict";

class PeepList {
  #url;

  constructor(url = "https://chitter-backend-api-v2.herokuapp.com/peeps") {
    this.#url = url;
  }

  async getPeeps() {
    const response = await fetch(this.#url);
    const peeps = await response.json();
    let peepList = "";
    peeps.forEach((peep) => {
      peepList += `<ul><li>${peep.body}</li></ul>`;
    });
    document.querySelector("#peeps").innerHTML = peepList;
  }
}
