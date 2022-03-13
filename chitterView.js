class ChitterView {
  constructor(model, api) {
   // this.model = model;
    
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
    this.submitButtonEl = document.querySelector('#submit');
    this.api.loadPeep(peeps => {
      this.displayPeeps(peeps);
    });

    this.submitButtonEl.addEventListener('click', () => {
      this.addNewPeep();
    });
    } 

    addNewPeep() {
      console.log("ADD NEW PEEP");
      const peepEl = document.querySelector('#peep-input');
      const peepElValue = peepEl.value;
      this.api.createPeep(peepElValue,(response) =>{
        this.api.loadPeep(peeps => {
            this.displayPeeps(peeps);
        });
      });
      peepEl.value = '';
    };

    displayPeeps(peeps) { 
      document.querySelectorAll('.peep').forEach(element => {
        element.remove();
      });
       peeps.forEach(peep => {
          const peepEl = document.createElement('div')
          peepEl.innerText = peep.body + ' by ' + peep.user.handle;
          peepEl.className = 'peep';
         this.mainContainerEl.append(peepEl);
       });
    }
  }
  
  module.exports = ChitterView;
  