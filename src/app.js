function createApp() {
  return new (class {
    constructor() {
      this.chitterApi = new chitterApi();
      this.allPeeps = this.allPeeps();
    }

    async allPeeps() {
      return await this.chitterApi.fetchAll().then((peeps) => {
        return peeps;
      });
    }
  })();
}
