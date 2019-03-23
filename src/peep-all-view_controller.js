(function(exports){

  var url = "https://chitter-backend-api.herokuapp.com/peeps"

  function PeepsAllViewController(peepsAllModel){
    this._peepsModel = peepsAllModel;
    this._peepsAllView = new PeepsAllView(this._peepsModel);
  }
    PeepsAllViewController.prototype.viewAllPeepsFromDatabase = function(document){
      fetch(url)                      // can be used by service workers
        .then((response) => {
          return response.json();
        }).then((allPeepsFromDatabase) => {
          return this._peepsAllView.wrapEachPeepHTML(allPeepsFromDatabase);
        }).then((allWrappedPeeps) => {
          document.getElementById('peeps-list').innerHTML = allWrappedPeeps
        });
  };

  exports.PeepsAllViewController = PeepsAllViewController;
})(this);
