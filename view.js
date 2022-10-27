class View {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    this.mainContainerEl = document.querySelector('#main-container');
    this.PeepButtonEl = document.querySelector('#post-peep-button');
  }

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
      const peepDiv = document.createElement('div');
      peepDiv.className = 'peep';
      this.mainContainerEl.append(peepDiv);

      this.createParagraph(peep.body, peepDiv, 'message');
      this.createParagraph(peep.created_at, peepDiv, 'date');
      this.createParagraph(peep.user.handle, peepDiv, 'user');
      this.createParagraph(peep.likes.length, peepDiv, 'likes');
    
    });
  }

  createParagraph = (peepData, div, tag) => {
    const peepPart = document.createElement('p');
    peepPart.className = tag;
    peepPart.textContent = peepData;
    div.append(peepPart);
  }

}

module.exports = View;