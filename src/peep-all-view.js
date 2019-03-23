(function(exports){
  // var peepsArray;
  function PeepsAllView(peepsModelAll){
    this._peeps = peepsModelAll;
  }
    PeepsAllView.prototype.viewAllPeepsFromDatabase = function(){
      peeps = this._peeps._allPeepsArray
      array = []
      arrayLength = peeps.length
      for (var i = 0; i < arrayLength; i ++){
        peepLink = `<a href="http://localhost:8080#peeps/${i}">`
        peepText = `${peeps[i].peep.substring(0,20)}`
        array.push(peepText)
        array.push(peepLink)
      }
      return array.join("")
      var htmlString = "<ul>"
      //
      // peepsArray.getPeeps().forEach(function(peep){
      //     htmlString+="<li><div>"+peep.getText()+"</div></li>"
      //     peepIndex = peepsArray[peepsArray.length - 1]
      //     peepLink = '<a href="http://localhost:8080#peeps/${peepIndex}">'
      //   })
      //   htmlString +="</ul>"
      //   return htmlString;

  };
  exports.PeepsAllView = PeepsAllView;
})(this);
