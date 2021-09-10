"use strict";

class PeepList {
  #url;

  constructor(url = "https://chitter-backend-api-v2.herokuapp.com/peeps") {
    this.#url = url;
  }

  getPeeps() {
    let container = document.querySelector("#peepsList");
    return fetch(this.#url)
      .then((response) => response.json())
      .then((peeps) => {
        let peepList = "";
        peeps.forEach((peep) => {
          peepList += `<ul><li>${peep.body}</li></ul>`;
        });
        container.innerHTML = peepList;
      });
  }
}
