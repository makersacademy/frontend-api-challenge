(function(exports){
  var peepsArray;
  function PeepsForView(peepslist){
    peepsArray = peepslist;
  }
    PeepsForView.prototype.viewAllPeepsFromDatabase = function(){
      // var htmlString = "<ul>"
      // // _peepsArray.getPeeps();
      //   _peepsArray.forEach(function(peep){
      //     htmlString+="<li><div>"+peep.getText()+"</div></li>"
      //   })
      //   htmlString +="</ul>"
      //   return htmlString;
      return peepsArray.getPeeps();
  };
  exports.PeepsForView = PeepsForView;
})(this);
