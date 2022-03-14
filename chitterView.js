

class ChitterView{
    constructor(model, api){
        this.model = model;
        this.api = api;
        
        
        this.inputEl = document.querySelector('#peep-input');
        this.mainContainerEl = document.querySelector('#main-container');

        this.buttonEl = document.querySelector('#publish');
        this.buttonEl.addEventListener('click', () => {
            this.addNewPeep();
        });
    };

    displayPeeps(){
        let peeps = this.model.getPeeps();
        peeps.forEach((item) => {
          const peepDiv = document.createElement('div')
          peepDiv.innerText = item
          peepDiv.className = 'peep';
          this.mainContainerEl.append(peepDiv)
        });
    };

    addNewPeep(){
        let content = this.inputEl.value
        
        this.api.createPeep(1, content, (response) => {
            this.model.addPeep(response);
            this.api.loadPeeps((data) => {
                this.model.setPeeps(data);
                this.displayPeeps();
            })
        });
        
    };

    
}

module.exports = ChitterView;