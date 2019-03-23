(function(exports) {

  function PeepsAllView(peepsAllModel){
    this._allPeepsModel = peepsAllModel;
  }

  PeepsAllView.prototype.wrapEachPeepHTML = function(jsonData) {
      var returnedHTML = "<ul>";
      for(var i = 0; i < Object.keys(jsonData).length; i ++ ) {
        returnedHTML += "<li><div>"+`${(jsonData[i].body)}\n`+"</div></li>"
      }
      returnedHTML += "</ul>"
      return console.log(returnedHTML)
    };
exports.PeepsAllView = PeepsAllView;
})(this);
