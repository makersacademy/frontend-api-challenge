function displayCheetView(){
  var cheetModel = new CheetModel(0, "Doing the Weekend Challenge...");
  var cheetView = new CheetView(cheetModel);
  result = "<div>Doing the Weekend Challenge...</div>";
  expects.isTrue(cheetView.inHTML() === result);
}

displayCheetView();
