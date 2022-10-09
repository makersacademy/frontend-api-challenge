class ChitterView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
  }

  renderPeeps = (peeps) => {
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
    peepBodyWrapper.classList.add(
      "flex-1",
      "border",
      "rounded-lg",
      "px-4",
      "py-2",
      "sm:px-6",
      "sm:py-4",
      "leading-relaxed",
      "bg-gradient-to-r",
      "from-pink-50"
    );
    // add styling to text
    let peepStrong = document.createElement("strong");
    peepStrong.classList.add("text-blue-900");
    peepStrong.innerText = "@" + peep.user.handle;
    let peepSpan = document.createElement("span");
    peepSpan.classList.add("float-right", "text-xs", "text-gray-400");
    peepSpan.innerText = peep.created_at;
    let peepBody = document.createElement("p");
    peepBody.classList.add("text-sm", "text-blue-700");
    peepBody.innerText = peep.body;

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
      this.renderPeeps(peeps);
    });
  };

  // addPeep = (peep) => {
  //   this.api.createPeep(user_id, peep, (data) => {
  //     this.model.setPeeps(data);
  //     this.renderPeeps();
  //   });
  // }
}

module.exports = ChitterView;
