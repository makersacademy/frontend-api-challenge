(function(exports) {
  function ChitterController(chitterModel, chitterView) {
    var chitterModel = ChitterModel
    var chitterView = chitterView

    updatePeepFeed(chitterModel, chitterView.updateFeed)
  }

  var updatePeepFeed = function(chitterModel, callback) {
    chitterModel.getPeepFeed(callback)
  }

  exports.ChitterController = ChitterController
})(this)