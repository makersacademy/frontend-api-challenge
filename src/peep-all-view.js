(function(exports) {

  function PeepsAllView(peepsAllModel){
    this._allPeepsModel = peepsAllModel;
  }

  PeepsAllView.prototype.wrapEachPeepHTML = function(jsonData) {
      var returnedHTML = "";
      for (var i = 0; i < Object.keys(jsonData).length; i ++ ) {
        returnedHTML += `${(jsonData[i].body)}\n`
      }
      return returnedHTML
    };
exports.PeepsAllView = PeepsAllView;
})(this);
