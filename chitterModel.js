class ChitterModel {
  constructor() {
    this.peeps = []
    this.likeCounter = 0;
    this.unlikeCounter = 0;
  }

  getPeeps() {
    return this.peeps
  }

  setPeeps(returnedPeeps) {
    this.peeps = returnedPeeps;
  }

  addPeeps(peep) {
    this.peeps.unshift(peep);
  }

  getLikeCounter() {
    return this.likeCounter;
  }

  addLike() {
    this.likeCounter++;
  }

  getUnlikeCounter() {
    return this.unikeCounter;
  }

  addUnlike() {
    this.unlikeCounter--;
  }
}

module.exports = ChitterModel;