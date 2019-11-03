(function(exports) {
  function ChitterController(chitterModel, chitterView, peepController) {
    this.chitterModel = chitterModel
    this.chitterView = chitterView
    this.peepController = peepController
    var self = this
    
    updatePeepFeed(self)
  }
  
  var updatePeepFeed = function(self) {
    self.chitterModel.getPeepFeed(function(results) {
      convertFeed(results, self)
    })
  }

  var convertFeed = function(results, self) {
    var peeps = []
    results.forEach(function(peep, index, array) {
      peepElement = self.peepController.createPeep(peep)
      peepElement.on('click', function() {})
      peeps.push(peepElement)
      if (index === array.length - 1) {
        self.chitterView.updateFeed(peeps)
      }
    });
  }

  exports.ChitterController = ChitterController
})(this)