class ChitterView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.peepsContainerEl = document.querySelector("#peeps-container");
  }
  displayPeeps() {
    this.model.loadPeeps().forEach((peep) => {
      const peepDivEl = document.createElement("div");
      peepDivEl.className = "peep";
      peepDivEl.append(this.createPeepBody(peep));
      peepDivEl.append(this.createPeepUserHandle(peep));
      peepDivEl.append(this.createPeepDatetimeCreated(peep));
      peepDivEl.append(this.createPeepLikesCount(peep));
      this.peepsContainerEl.append(peepDivEl);
    });
  }

  createPeepBody(peep) {
    const peepBodyEl = document.createElement("p");
    peepBodyEl.className = "peep-body";
    peepBodyEl.textContent = peep.body;
    return peepBodyEl;
  }

  createPeepUserHandle(peep) {
    const peepUserHandleEl = document.createElement("p");
    peepUserHandleEl.className = "peep-user-handle";
    peepUserHandleEl.textContent = peep.user.handle;
    return peepUserHandleEl;
  }

  createPeepDatetimeCreated(peep) {
    const peepDatetimeCreatedEl = document.createElement("p");
    peepDatetimeCreatedEl.className = "peep-datetime-created";
    const peepCreatedString = new Date(peep.created_at);
    const peepTimeString = peepCreatedString.toTimeString().substring(0, 5);
    const peepDateString = peepCreatedString.toDateString();
    peepDatetimeCreatedEl.textContent = `${peepTimeString} ${peepDateString}`;
    return peepDatetimeCreatedEl;
  }

  createPeepLikesCount(peep) {
    const peepLikesCountEl = document.createElement("p");
    peepLikesCountEl.className = "peep-datetime-created";
    const likesCount = peep.likes.length;
    peepLikesCountEl.textContent = `${likesCount} ${
      likesCount === 1 ? "like" : "likes"
    }`;
    return peepLikesCountEl;
  }

  displayPeepsFromApi() {
    this.api.fetchPeeps((peeps) => {
      this.model.setPeeps(peeps);
      this.displayPeeps();
    });
  }
}

module.exports = ChitterView;
