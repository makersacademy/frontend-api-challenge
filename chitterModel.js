class ChitterModel {

  constructor() {
    this.chitts = [];
  }
  getChitts() {
    return this.chitts;
  }
  addChitt(chitt) {
    this.chitts.push(chitt);
  }
  reset() {
    this.chitts = [];
  }
  setChitts(chitts) {
    chitts.forEach(chitt=> {
      let counted_likes
      let time = `${chitt.created_at.slice(11, 16)} on ${chitt.created_at.slice(8,10)}-${chitt.created_at.slice(5,7)}-${chitt.created_at.slice(0,4)}`
      if (typeof chitt.likes === 'undefined') {counted_likes = 0}
      else {counted_likes = chitt.likes.length}
      let updated = (chitt.created_at === chitt.updated_at )
      this.chitts.push({user: chitt.user.handle, chitt: chitt.body , posted: time, id: chitt.user.id, likes: counted_likes, people_who_like: chitt.likes, updated: updated});
    })
  }


}

module.exports = ChitterModel;