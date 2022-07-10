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
}

module.exports = ChitterView;