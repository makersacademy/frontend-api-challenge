'use strict';

class PeepList {
  
  constructor() {
    this.list = [];
  }

  addPeep(id, text) {
    this.list.push(new Peep(id, text));
  }
}