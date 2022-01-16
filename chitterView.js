class ChitterView {

  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayChitts() {
    // const removeNote = document.querySelectorAll('.note');
    // removeNote.forEach(note => {
    //   note.remove();
    // })
    
    // document.querySelector('#addChitt').value=""

    const chitts = this.model.getChitts()
    
    chitts.forEach(chitt => {
      const chittEl = document.createElement('div')
      let people
      if (chitt.likes === 1) {people = 'person'}
      else {people = 'people'}
      chittEl.innerText = `\n ${chitt.user}: ${chitt.chitt} \n Posted at:${chitt.posted} \n Liked by ${chitt.likes} ${people}`;
      chittEl.className = `chitt ${chitt.id}${chitt.posted}`;
      this.mainContainerEl.append(chittEl);
    });
  };

}

module.exports = ChitterView;