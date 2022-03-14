class ChitterView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.peepsContainerEl = document.querySelector('#peeps-container');
    
    const submitButtonEl = document.querySelector('#submit-button');

    submitButtonEl.addEventListener('click', () => {
      const chitterName = "dummy";
      this.api.getChitterInfo(chitterName, chitterData => {
        this.display(chitterData);
      });
    });
  }

  display(data) {
    
    let brAElem = document.createElement("br");
    brAElem.style.backgroundColor = "#ffffff";
    brAElem.style.height = "2px";
    let spaceDiv = document.createElement("div");
    spaceDiv.append(brAElem);
    spaceDiv.innerText = brAElem;
    spaceDiv.style.height = "2px";
      
    data.forEach(peep => {
      let peepDiv;
      peepDiv = this.setupPeep(peep);
      this.peepsContainerEl.append(peepDiv);
      this.peepsContainerEl.append(spaceDiv);
    });
    
  }

  setupPeep(peep) {

    let brElem = document.createElement("br");

    let span1Elem = document.createElement("span");
    span1Elem.innerText = peep.user.id;
    span1Elem.style.float = "left";
    span1Elem.style.width = "50.00%";
    span1Elem.style.textAlign = "left";

    let span2Elem = document.createElement("span");
    span2Elem.innerText = peep.updated_at;
    span2Elem.style.float = "right";
    span2Elem.style.width = "50.00%";
    span2Elem.style.textAlign = "right";
    span2Elem.style.fontWeight = "normal";

    let span3Elem = document.createElement("span");
    span3Elem.innerText=brElem;
    span3Elem.innerText="";
    span3Elem.append(brElem);

    let span4Elem = document.createElement("span");
    span4Elem.innerText = peep.body;
    span4Elem.style.fontFamily = "Times New Roman";
    span4Elem.style.fontSize = "15px";
    span4Elem.style.fontWeight = "normal";

    let divElem = document.createElement("div");
    divElem.style.backgroundColor = "#ffe6ff";
    divElem.style.borderRadius = "15px";
    divElem.style.padding = "15px";
    
    divElem.append(span1Elem);
    divElem.append(span2Elem);
    divElem.append(span3Elem);
    divElem.append(brElem);
    divElem.append(span4Elem);
    divElem.append(brElem);

    return divElem;

  }
}

module.exports = ChitterView;