// (function(exports){
  // var peepsArray;
  function PeepsAllView(peepsModelAll){
    this._peeps = peepsModelAll;
    this.peeps = {};
    this.peepsData;

    renderPeeps();
  }
    PeepsAllView.prototype.viewAllPeepsFromDatabase = function(){
      peeps = this._peeps._allPeepsArray
      array = []
      arrayLength = peeps.length
      for (var i = 0; i < arrayLength; i ++){
        peepLink = `<a href="http://localhost:8080#peeps/${i}">`
        peepText = `${peeps[i].peep.substring(0,20)}`

        array.push(peepLink)
        array.push(peepText)
      }
      return array.join("")
      var htmlString = "<ul>"
  };
  
async function renderPeeps() {
  const peepsData = await fetchAllPeeps();
  eachPeepHTML(peepsData)
}

  function fetchAllPeeps (url = "https://chitter-backend-api.herokuapp.com/peeps") {
    return fetch(url)
      .then((response) => {
        return response.json();
      }).then((jsonData) => {
        return jsonData;
      });
  }


function eachPeepHTML(apiData) {
    dataArray = [];
    var returnedHTML = '';
    var count = Object.keys(apiData).length
    for(var i = 0; i < count; i ++ ) {
      returnedHTML += `${(apiData[i].body)}\n`
    }
    return returnedHTML

  };

//   exports.PeepsAllView = PeepsAllView;
// )(this);
