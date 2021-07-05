(function(exports){
  // var allPeepsArray;
  function PeepsAll(){
    this._allPeepsArray = new Array();
  }

    PeepsAll.prototype.getPeeps = function(){
      return this._allPeepsArray;
    };

    PeepsAll.prototype.createNewPeep = function(peep){
    this._allPeepsArray.push(peep)
  }

exports.PeepsAll = PeepsAll;
})(this);
