class View {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    this.mainContainerEl = document.querySelector('#main-container');
    this.PeepButtonEl = document.querySelector('#post-peep-button');

    this.showSignupForm();
    this.closeSignupForm();

  }

  // VIEWING ALL PEEPS
  displayPeepsFromApi = () => {
    this.client.loadPeeps((peeps) => {
      this.model.setPeeps(peeps);
      this.displayPeeps();
    })
  }

  displayPeeps = () => {
    const allPeeps = this.model.getPeeps();
    console.log(allPeeps); // remove later
    
    allPeeps.forEach(peep => {
      const cardTemplate = document.getElementById("peep-template");
      const div = cardTemplate.content.cloneNode(true);
      div.getElementById('user-name').textContent = peep.user.handle;
      div.getElementById('time').textContent = this.timeFormatted(peep.created_at);
      div.getElementById('date').textContent = this.dateFormatted(peep.created_at);
      div.getElementById('peep-content').textContent = peep.body;
      div.getElementById('likes-count').textContent = peep.likes.length;
      this.mainContainerEl.append(div);    
    });
  }

  dateFormatted = (createdAt) => {
    return createdAt.substr(0,10);
  }
  
  timeFormatted = (createdAt) => {
    return createdAt.substr(11,5);
  }
  // VIEWING ALL PEEPS ENDS

  //SIGN UP
  showSignupForm = () => {
    document.querySelector('#show-signup').addEventListener("click", () => {
      document.querySelector(".popup-signup").classList.add("active");
      document.querySelector("#form-background").style.display = 'block';
    });
  }

  closeSignupForm = () => {
    document.querySelector('.popup-signup .close-btn-signup').addEventListener("click", () => {
      document.querySelector(".popup-signup").classList.remove("active");
      document.querySelector("#form-background").style.display = 'none';
    });
  }
  //SIGN UP ENDS


}

module.exports = View;