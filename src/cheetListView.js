var ListOfCheetsView = function(listOfCheets){
  this.listOfCheets = listOfCheets;
}

ListOfCheetsView.prototype = (function(){
  function inHTML(){
    var result = '';
    this.listOfCheets.display().forEach(cheet => {
      result += `<li><div><a>${cheet.post}</a></div></li>`;
    })
    return `<ul>${result}</ul>`
  }return{
    inHTML: inHTML
  }
})()