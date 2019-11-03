(function(exports) {

  
  function PeepController(peepView) {
    this.peepView = peepView

  }
  PeepController.prototype = {
    createPeep: function(peepData) {
      return this.peepView.createPeepElement(peepData)
    }
  }
  
  exports.PeepController = PeepController
})(this)