(function(exports) {

  
  function PeepController(peepView, peepModel) {
    this.peepView = peepView
    this.peepModel = peepModel

  }
  PeepController.prototype = {
    createPeep: function(peepData) {
      return this.peepView.createPeepElement(peepData)
    },
    getPeep: function(id) {
      this.peepModel.getPeep(id)
    }
  }
  
  exports.PeepController = PeepController
})(this)