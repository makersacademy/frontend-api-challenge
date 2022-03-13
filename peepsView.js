class PeepsView {
    constructor(model, api) {
      this.model = model;
      this.api = api;
      this.mainContainerEl = document.querySelector('.col-md-auto');
      const peeps = this.model.setPeeps();
      this.api.loadPeeps(peeps => {
        this.display(peeps);
      });
    }
    
    display(peeps) {
     peeps.forEach(peep => {
        console.log(peep);
        const figure = document.createElement('figure');
        figure.className = 'text-center shadow-lg p-3 mb-5 bg-body rounded bg-success p-2 text-dark bg-opacity-25';
        const peepEl = document.createElement('blockquote');
        peepEl.innerText = peep.body;
        peepEl.className = 'blockquote';
        const authorEl = document.createElement('figcaption');
        authorEl.innerText = `${peep.user.handle} on `;
        authorEl.className = 'd-inline blockquote-footer';
        const dateEl = document.createElement('figcaption');
        const isoDate = new Date(peep.created_at)
        dateEl.innerText = isoDate.toLocaleString('fr-FR');
        dateEl.className = 'd-inline figure-caption';
        figure.appendChild(peepEl);
        figure.appendChild(authorEl);
        figure.appendChild(dateEl);
        this.mainContainerEl.append(figure);
    })
    }
  }
  
  module.exports = PeepsView;