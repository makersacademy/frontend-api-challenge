class PeepModel {
  constructor(api) {
    this.api = api;
    this.peeps = [];
  }

  getPeeps() {
    return this.peeps;
  }

  loadPeepsData(callback) {
    this.api.loadPeeps((data) => {
      this.peeps = data;
      callback(data);
    });
  }
}

module.exports = PeepModel;
