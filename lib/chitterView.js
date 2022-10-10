class ChitterView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.logBtn = document.getElementById("log-btn");
    this.logBtn.addEventListener("click", () => {
      this.login();
    });
  }

  renderPeeps = () => {
    const peeps = this.model.getPeeps();
    const peepList = document.getElementById("peeps");
    peepList.innerHTML = "";
    peeps.forEach((peep) => {
      this.stylePeep(peep, peepList);
    });
  };

  // styling to go inside flex container
  stylePeep = (peep, peepList) => {
    // flex container
    let peepItem = document.createElement("div");
    peepItem.classList.add("flex");
    // add styling to background and assign width of flex
    let peepBodyWrapper = document.createElement("div");
    peepBodyWrapper.classList.add("peepBody");
    // add styling to text
    let peepStrong = document.createElement("strong");
    peepStrong.classList.add("text-blue-900");
    peepStrong.innerText = "@" + peep.user.handle;
    let peepSpan = document.createElement("span");
    peepSpan.classList.add("float-right", "text-xs", "text-gray-400");
    peepSpan.innerText = peep.created_at;
    let peepBody = document.createElement("p");
    peepBody.classList.add("text-sm", "text-blue-700");
    peepBody.textContent = peep.body;

    // append to flex container in correct order
    peepBodyWrapper.appendChild(peepStrong);
    peepBodyWrapper.appendChild(peepSpan);
    peepBodyWrapper.appendChild(peepBody);
    peepItem.appendChild(peepBodyWrapper);
    peepList.appendChild(peepItem);
  };

  loadPeeps = () => {
    this.api.getPeeps((peeps) => {
      this.model.setPeeps(peeps);
      this.renderPeeps();
    });
  };

  login = (handle, password) => {
    this.api.createSession(handle, password, (data) => {
      this.model.setSession(data);
    });
  };
}

module.exports = ChitterView;
