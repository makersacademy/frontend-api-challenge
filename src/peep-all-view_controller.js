(function(exports){

  var url = "https://chitter-backend-api.herokuapp.com/peeps"

  function PeepsAllViewController(){
    this._peepsModel = new PeepsAll();
    this._peepsAllView = new PeepsAllView(this._peepsModel);
  }
    PeepsAllView.prototype.viewAllPeepsFromDatabase = function(doc){
      fetch(url)                      // can be used by service workers
        .then((response) => {
          return response.json();
        }).then((allPeepsFromDatabase) => {
          return this.peepsAllView.wrapEachPeepHTML(allPeepsFromDatabase);
        }).then((allWrappedPeeps) => {
          doc.getElementByID('peeps-list').innerHTML = allWrappedPeeps
        });
  };

  exports.PeepsAllViewController = PeepsAllViewController;
})(this);
