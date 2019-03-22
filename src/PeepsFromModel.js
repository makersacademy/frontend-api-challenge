(function(exports){
  var allPeeps;
  function PeepsFromModel(){
    allPeeps = new Array();
  }

    PeepsFromModel.prototype.getPeeps = function(){
      return allPeeps;
    };

    PeepsFromModel.prototype.createNewPeep = function(text){
    allPeeps.push(text)
  }

exports.PeepsFromModel = PeepsFromModel;
})(this);
