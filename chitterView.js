class ChitterView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
  }

  displayPeeps() {
    this.model.getPeeps().forEach((peep) => {
      this.createPeepEl(peep.id);
      this.createUserEl(peep.user.handle, peep.id);
      this.createMessageEl(peep.body, peep.id);
      this.createTimeEl(peep.created_at.substr(0,19), peep.id);
      // this.createUpdatedEl(peep.updated_at, peep.id);
      // this.createLikesEl(peep.likes, peep.id);
    });
  }

  displayPeepsFromApi() {
    this.api.loadPeeps((peeps) => {
      this.model.setPeeps(peeps);
      this.displayPeeps();
    })
  }

  createPeepEl(id) {
    const peepEl = document.createElement('div');
    peepEl.className = 'peeps';
    peepEl.id = `message_${id}`
    document.querySelector('div#main-container').append(peepEl);
  }

  createMessageEl(message, id) {
    const messageEl = document.createElement('div');
    messageEl.className = 'message';
    messageEl.innerText = message;
    document.querySelector('div#message_' + id).appendChild(messageEl);
  }

  createUserEl(user, id) {
    const userEl = document.createElement('div');
    userEl.className = 'user';
    userEl.innerText = `${user} wrote: `;
    document.querySelector('div#message_' + id).appendChild(userEl);
  }

  createTimeEl(time, id) {
    const timeEl = document.createElement('div');
    timeEl.className = 'time_created';
    timeEl.innerText = `Created at: ${time}`;
    document.querySelector('div#message_' + id).appendChild(timeEl);
  }

  // createLikesEl(likes, id) {
  //   const likesEl = document.createElement('button');
  //   likesEl.className = 'likes';
  //   likesEl.innerText = `likes = ${likes.length}`;
  //   document.querySelector('div#message_' + id).appendChild(likesEl);
  // }

}

module.exports = ChitterView;