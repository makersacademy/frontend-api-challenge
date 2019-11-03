(function(exports) {

  
  function PeepController(peepView, APIModel) {
    this.peepView = peepView
    this.APIModel = APIModel

  }
  PeepController.prototype = {
    createPeep: function(peepData) {
      return this.peepView.createPeepElement(peepData)
    },
    getPeep: function(id, callback) {
      var self = this
      this.APIModel.getPeep(id, function(data) {
        peep = self.peepView.createPeepElement(data)
        callback(peep)
      })
    }
  }
  
  exports.PeepController = PeepController
})(this)