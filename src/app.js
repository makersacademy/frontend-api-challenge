"use strict";
function createApp() {
  return new (class {
    constructor() {
      this.chitterApi = new chitterApi();
      this.allPeeps = this.allPeeps();
      this.createViews = new CreateViews();
      this.owner = "kay";
    }

    async allPeeps() {
      return await this.chitterApi.fetchAll().then((peeps) => {
        return peeps.map((peep) => {
          this.createViews.add(peep, this.owner);
          return peep;
        });
      });
    }
  })();
}
