class ChitterView {
  constructor(model, api) {
    this.model = model;
    this.body = document.querySelector('body');
    this.api = api;

    // document.querySelector('#see-peeps').addEventListener('click', () => {
    //   const newNote = document.querySelector('#add-note-input').value;
    this.displayPeepsFromApi();
  };

  displayPeeps() {
    let peeps = []
    document.querySelector('#see-peeps').addEventListener('click', () => {
      this.displayPeepsFromApi()
      peeps = this.model.getPeeps()
      console.log(peeps)
      peeps.forEach(peep => {
        const peepEl = document.createElement('div');
        peepEl.textContent = peep.body;
        peepEl.className = 'peep';
        console.log(peepEl);
        this.body.append(peepEl);
      });
    });
    // document.querySelector('#add-note-input').value = '';
  }

  displayPeepsFromApi() {
      if (this.api != null){
      this.api.loadPeeps(data => {
        this.model.setPeeps(data)
        console.log(data);
      });
  }}

    // displayOnePeep() {
  displayPeepsById() {
    document.querySelector('#search-peeps-id').addEventListener('click', () => { 
          // if (document.querySelector('#peeps')) {
          //   document.querySelector('#peep').remove();
          // }
      const id = document.querySelector('#id-input').value;
        this.api.loadPeepsById(id, data => {
          if (data != null) {
            const peepEl = document.createElement('div');
            peepEl.textContent = data.body;
            peepEl.className = 'peep';
            console.log(peepEl);
            this.body.append(peepEl);
          }
        })
    })
  }

  registerUser() {
    document.querySelector('#sign-up-btn').addEventListener('click', () => { 
      const user = document.querySelector('#user').value;
      const password = document.querySelector('#password').value;
      this.api.createUser(user, password, response => {
        console.log(response);
      });

    });
  }

}

module.exports = ChitterView;