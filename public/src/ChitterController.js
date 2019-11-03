(function(exports) {
  function ChitterController(chitterModel, chitterView) {
    var chitterModel = chitterModel
    var chitterView = chitterView
    
    updatePeepFeed(chitterModel, chitterView.updateFeed)
  }
  
  var updatePeepFeed = function(chitterModel, chitterCallback) {
    converterCallback = function(results) {
      convertFeed(results, chitterCallback)
    }
    chitterModel.getPeepFeed(converterCallback)
  }

  var convertFeed = function(results, chitterCallback) {
    var peeps = []
    results.forEach(function(peep, index, array) {
      peeps.push(PeepView.createPeep(peep))
      if (index === array.length - 1) {
        chitterCallback(peeps)
      }
    });
  }

  exports.ChitterController = ChitterController
})(this)