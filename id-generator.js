let ID = {
  currentID: -1,
  generate: function() {
    this.currentID += 1
    return this.currentID
  },
  reset: function() {
    this.currentID = -1
  }
}