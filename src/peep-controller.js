(function (exports) {
  var self

  function PeepController (apiModel, peepListView) {
    this.apiModel = apiModel
    this.peepListView = peepListView
    self = this
    displayPeeps();
  }

  function displayPeeps () {
    self.apiModel.getPeeps(function(peepData) {
      var element = $('#app')
      element.html(self.peepListView.toHTML(peepData))
    })
  }

  exports.PeepController = PeepController
})(this)
