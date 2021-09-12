class CreateViews {
  constructor() {
    this.peepContainer = document.querySelector("#basePeep");
    this.container = document.querySelector("#peepContainer");
    this.timeFrames = {
      day: 24 * 60 * 60,
      hour: 60 * 60,
      minunte: 60,
      second: 1,
    };
    this.lastPeepCounter = 0;
  }
  add(peep, owner) {
    let peepBlock = this.peepContainer.cloneNode(true);
    this.owner = owner;
    this.peep = peep;
    this.fillFields(peepBlock);
    this.container.insertAdjacentElement("beforeend", peepBlock);
  }

  fillFields(peepBlock) {
    peepBlock.setAttribute("data-peep-message", true);
    this.#setMine(peepBlock);
    this.#setOwner(peepBlock);
    this.#setBody(peepBlock);
    this.#setLikes(peepBlock);
    this.#setTimer(peepBlock);
  }

  #setMine(peepBlock) {
    if (this.owner === this.peep.user.handle) {
      peepBlock.setAttribute("data-peep-mine", "true");
      if (this.lastPeepCounter < 1) this.#lastPeep();
      this.lastPeepCounter++;
    }
  }

  #lastPeep() {
    let lastPeepBlock = document.querySelector("#lastPeep");
    this.#emptyLastPeep(lastPeepBlock);
    this.#setBody(lastPeepBlock);
    this.#setTimer(lastPeepBlock);
  }

  #emptyLastPeep(lastPeepBlock) {
    lastPeepBlock.querySelector(".card-text").innerHTML = "";
  }

  #setOwner(peepBlock) {
    let peepHeader = peepBlock.querySelector(".card-header");
    peepHeader.setAttribute("data-peep-owner", this.peep.user.handle);
  }

  #setBody(peepBlock) {
    let peepBody = peepBlock.querySelector(".card-text");
    peepBody.insertAdjacentText("beforeend", this.peep.body);
    peepBody.insertAdjacentHTML("beforeend", "<br /> ");
  }

  #setLikes(peepBlock) {
    let peepHeader = peepBlock.querySelector(".like");
    peepHeader.setAttribute("data-like", this.peep.likes.length);
  }

  #setTimer(peepBlock) {
    let timerHeader = peepBlock.querySelector("[data-peep-time]");
    let nowTime = new Date().getTime();
    let createdAt = new Date(this.peep.created_at).getTime();
    let timePassed = parseInt((nowTime - createdAt) / 1000);
    this.#setTimerAgo(timePassed, timerHeader);
  }

  #setTimerAgo(timePassed, timerHeader) {
    for (const [key, value] of Object.entries(this.timeFrames)) {
      let useKey = key.toString();
      let passed = parseInt(timePassed / value);
      if (passed > 0) {
        timerHeader.setAttribute("data-peep-time", passed);
        if (passed > 1) useKey = useKey + "s";
        timerHeader.setAttribute("data-peep-ago", useKey);
        break;
      }
    }
  }
}
