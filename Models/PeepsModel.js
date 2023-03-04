class PeepModel{
  constructor() {
    this.PeepsList = new Array();
  }

  GetPeeps() {
    return this.PeepsList;
  }

  GetPeep_ID(id) {
    return this.PeepsList.find(peep => peep.id === id);
  }

  AddPeep(peep) {
    this.PeepsList.push(peep);
  }

  DeletePeep(id) {
    this.PeepsList = this.PeepsList.filter(peep => peep.id !== id);
  }
}

module.exports = PeepModel;