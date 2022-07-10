class ChitterView {
  constructor(api) {
    this.mainContainerEl = document.querySelector('#main-container');
    this.api = api
  }

  displayPeeps() {
    this.api.loadPeeps((peeps) => {
      peeps.forEach((peep) => {
        let div = document.createElement("div");
        div.className = "peep";
        div.innerText = peep.body;

        let peepDetails = document.createElement("p");
        let time = this.formatTime(peep.created_at);
        peepDetails.innerText = `@${peep.user.handle} || ${time}`;
        peepDetails.className = "peep-details";
        div.append(peepDetails);

        console.log(div);

        this.mainContainerEl.append(div);
      })
    })
  }

  formatTime(timestamp) {
    const year = timestamp.substr(0, 4);
    const month = timestamp.substr(5, 2);
    const day = timestamp.substr(8, 2);
    const time = timestamp.substr(11, 5);
    return `${time} ${day}/${month}/${year}`
  }
}

"2022-07-03T15:55:57.177Z"

module.exports = ChitterView;