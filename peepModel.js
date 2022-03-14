class PeepModel {
  constructor() {
    this.feed = [];
  };

  getPeeps() {
    return this.feed;
  };

  addPeep(peep) {
    this.feed.push(peep);
  }
}

module.exports = PeepModel;