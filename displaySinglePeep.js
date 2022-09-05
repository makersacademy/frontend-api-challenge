class DisplaySinglePeep {
  display(peep, userId) {
    const peepsContainerEl = document.querySelector("#display-peeps-container");
    const peepDivEl = document.createElement("div");
    peepDivEl.className = "peep";
    peepDivEl.append(this.createPeepBody(peep));
    peepDivEl.append(this.createPeepUserHandle(peep));
    peepDivEl.append(this.createPeepDatetimeCreated(peep));
    peepDivEl.append(this.createPeepLikesCount(peep));
    if (userId === peep.user.id) {
      peepDivEl.append(this.createDeletePeepButton(peep));
    }
    peepsContainerEl.append(peepDivEl);
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
    peepLikesCountEl.className = "peep-likes-count";
    const likesCount = peep.likes.length;
    peepLikesCountEl.textContent = `${likesCount} ${
      likesCount === 1 ? "like" : "likes"
    }`;
    return peepLikesCountEl;
  }

  createDeletePeepButton(peep) {
    const deletePeepButtonEl = document.createElement("button");
    deletePeepButtonEl.className = "delete-peep-button";
    deletePeepButtonEl.id = `delete-button-id-${peep.id}`;
    deletePeepButtonEl.textContent = "delete peep";
    return deletePeepButtonEl;
  }
}

module.exports = DisplaySinglePeep;
