(function(exports){
  var allPeepsArray;
  function PeepsAll(){
    allPeepsArray = new Array();
  }

    PeepsAll.prototype.getPeeps = function(){
      return allPeepsArray;
    };

    PeepsAll.prototype.createNewPeep = function(peep){
    allPeepsArray.push(peep)
  }

exports.PeepsAll = PeepsAll;
})(this);
