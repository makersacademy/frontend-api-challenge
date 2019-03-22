(function(exports){
  var peepsArray;
  function PeepsAllView(peepsModelAll){
    peepsArray = peepsModelAll;
  }
    PeepsAllView.prototype.viewAllPeepsFromDatabase = function(){
      var htmlString = "<ul>"

      peepsArray.getPeeps().forEach(function(peep){
          htmlString+="<li><div>"+peep.getText()+"</div></li>"
        })
        htmlString +="</ul>"
        return htmlString;

  };
  exports.PeepsAllView = PeepsAllView;
})(this);
