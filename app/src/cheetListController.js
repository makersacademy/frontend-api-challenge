var CheetListController = function(listModel){
  listModel.add("Hey, I'm on Chitter. Have a nice day everyone!");
  this.listModel = listModel;
  this.listView = new CheetListView(listModel);
}

CheetListController.prototype = (function(){

  function fullCheet(elem = document.getElementById('app')){
    elem.innerHTML = this.listView.inHTML();
  }

  function makeUrlChangeCheetForCurrentPage() {
    window.addEventListener("hashchange", showCheetForCurrentPage);
  }

  function showCheetForCurrentPage() {
    showCheet(getCheetFromUrl(window.location));
  }

  function getCheetFromUrl(location) {
    return location.hash.split("#cheet/")[1];
  }

  function showCheet(id) {
    var div = document.getElementById("cheet");
    var selectedCheet = listOfCheets.listModel.list.find(cheet => cheet.id == id);
    div.innerHTML = selectedCheet.post;
  }

  function formSubmit() {
    document.getElementById('text').addEventListener("submit", function() {
      event.preventDefault();
      this.listView.listOfCheets.add(event.target.elements.textarea.value);
      this.fullCheet();
    }.bind(this));
  }return{
    fullCheet: fullCheet,
    makeUrlChangeCheetForCurrentPage: makeUrlChangeCheetForCurrentPage,
    showCheet: showCheet,
    formSubmit: formSubmit
  }
})()
