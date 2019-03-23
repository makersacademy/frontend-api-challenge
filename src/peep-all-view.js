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
      //
      // peepsArray.getPeeps().forEach(function(peep){
      //     htmlString+="<li><div>"+peep.getText()+"</div></li>"
      //     peepIndex = peepsArray[peepsArray.length - 1]
      //     peepLink = '<a href="http://localhost:8080#peeps/${peepIndex}">'
      //   })
      //   htmlString +="</ul>"
      //   return htmlString;

  };
async function renderPeeps() {
  const peepsData = await fetchAllPeeps();
  eachPeepHTML(peepsData)
}

  function fetchAllPeeps() {
    return fetch("https://chitter-backend-api.herokuapp.com/peeps")
      .then((response) => {
        return response.json();
      }).then((jsonData) => {
        return jsonData;
      });

  }


  function eachPeepHTML(apiData) {
    // console.log(apiData)
    dataArray = [];

    // console.log(dataArray)
    // // var returnedHTML = "<ul>";
    // this._returnedHTML = "<ul>";
    var count = Object.keys(apiData).length
    //
    for(var i = 0; i < count; i ++ ) {
      console.log(apiData[i].id)
      console.log(apiData[i].body)
      // dataArray.push(JSON.parse(apiData[i]))
      // console.log(dataArray[i])
    // this._returnedHTML += '${apiData[i].id}'
    }
    //   // returnedHTML += `<a href="#user/${jsonData[i].user.handle}" id=${(jsonData[i].id)}><div class="well"><li>${(jsonData[i].body)}<br><i>- ${(jsonData[i].user.handle)}</i></li></div></a>`
    // this._returnedHTML += "</ul>"
    // return this._returnedHTML;
  };

//   exports.PeepsAllView = PeepsAllView;
// )(this);
