class PeepsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerE1 = document.querySelector('#main-container');

    document.querySelector('#add-peep-btn').addEventListener('click', () => {
      const newPeep = document.querySelector('#add-peep-input').value;
      this.addNewPeep(newPeep);
    });
  }

  displayPeeps() {
    document.querySelectorAll('.peep').forEach(element => {
      element.remove();
    });

    const peeps = this.model.getPeeps();
    const sortedPeeps = peeps.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    sortedPeeps.forEach(peep => {
      const peepE1 = document.createElement('div');
      peepE1.innerHTML = `
        <div>id: ${peep.id}</div>
        <div>Body: ${peep.body}</div>
        <div>Created at: ${peep.created_at}</div>
        <div>Updated at: ${peep.updated_at}</div>
        <div>User Id: ${peep.user.id}</div>
        <div>User handle: ${peep.user.handle}</div>
        <div>Likes: ${peep.likes.map(like => like.user.handle).join(', ')}</div>
      `;
      peepE1.className = 'peep';
      this.mainContainerE1.append(peepE1);
    });
  }

  addNewPeep(newPeep) {
    this.model.addPeep(newPeep);
    this.displayPeeps();
  }

  displayPeepsFromApi() {
    return this.client.loadPeeps().then((peeps) => {
      this.model.setPeeps(peeps);
      this.displayPeeps();
    });
  }
}

module.exports = PeepsView;