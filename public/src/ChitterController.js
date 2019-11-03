(function(exports) {

  var self

  function ChitterController(APIModel, chitterView, peepController) {
    this.APIModel = APIModel
    this.chitterView = chitterView
    this.peepController = peepController
    self = this
    
    updatePeepFeed()
  }
  
  var updatePeepFeed = function() {
    self.APIModel.getPeepFeed(function(results) {
      convertFeed(results)
    })
  }

  var convertFeed = function(results) {
    var peeps = []
    results.forEach(function(peep, index, array) {
      peepElement = self.peepController.createPeep(peep)
      addListener(peepElement)
      peeps.push(peepElement)
      if (index === array.length - 1) {
        self.chitterView.updateFeed(peeps)
      }
    });
  }
  
  var addListener = function(element) {
    element.on('click', function() {
      peepId = +element.attr('id').split('-')[1]
      self.peepController.getPeep(peepId, self.chitterView.viewPeep)
      self.chitterView.hideFeed()
    })
  }

  exports.ChitterController = ChitterController
})(this)