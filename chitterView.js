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

        let userhandle = document.createElement("p");
        userhandle.innerText = `@${peep.user.handle}`;
        userhandle.className = "user-handle";
        div.append(userhandle)

        let timestamp = document.createElement("p");
        timestamp.innerText = peep.created_at
        timestamp.className = "time";
        div.append(timestamp);

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