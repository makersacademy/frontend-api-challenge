(function(exports) {
  function ChitterController(ChitterModel, ChitterView) {
    var chitterModel = ChitterModel
    var chitterView = ChitterView

    updatePeepFeed(chitterModel, chitterView.updateFeed)
  }

  var updatePeepFeed = function(chitterModel, callback) {
    chitterModel.getPeepFeed(callback)
  }

  exports.ChitterController = ChitterController
})(this)