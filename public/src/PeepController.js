(function(exports) {

  
  function PeepController(peepView, APIModel) {
    this.peepView = peepView
    this.APIModel = APIModel

  }
  PeepController.prototype = {
    createPeep: function(peepData) {
      return this.peepView.createPeepElement(peepData)
    },
    getPeep: function(id) {
      this.APIModel.getPeep(id)
    }
  }
  
  exports.PeepController = PeepController
})(this)