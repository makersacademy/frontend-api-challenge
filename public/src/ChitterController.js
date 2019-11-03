(function(exports) {
  function ChitterController(chitterModel, chitterView, peepController) {
    this.chitterModel = chitterModel
    this.chitterView = chitterView
    this.peepController = peepController
    var self = this
    
    updatePeepFeed(self)
  }
  
  var updatePeepFeed = function(self) {
    converterCallback = function(results) {
      convertFeed(results, self)
    }
    self.chitterModel.getPeepFeed(converterCallback)
  }

  var convertFeed = function(results, self) {
    var peeps = []
    results.forEach(function(peep, index, array) {
      peeps.push(self.peepController.createPeep(peep))
      if (index === array.length - 1) {
        self.chitterView.updateFeed(peeps)
      }
    });
  }

  exports.ChitterController = ChitterController
})(this)