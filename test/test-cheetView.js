function displayCheetView(){
  var cheet = new Cheet(0, "Doing the Weekend Challenge...");
  var cheetView = new CheetView(cheet);
  result = "<div>Doing the Weekend Challenge...</div>";
  expects.isTrue(cheetView.inHTML() === result);
}

displayCheetView();