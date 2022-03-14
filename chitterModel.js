class ChitterModel {
  constructor() {
    this.chitterInfo = null
  }

  setChitterInfo(chitterInfo) {
    this.chitterInfo = chitterInfo;
  }

  getChitterInfo() {
    return this.chitterInfo;
  }
}

module.exports = ChitterModel;