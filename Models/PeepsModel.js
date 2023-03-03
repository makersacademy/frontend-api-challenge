class PeepModel{
  constructor() {
    this.PeepsList = new Array();
  }

  GetPeeps() {
    return this.PeepsList;
  }

  AddPeep(peep) {
    this.PeepsList.push(peep);
  }
}

module.exports = PeepModel;