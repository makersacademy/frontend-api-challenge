function displayCheetModel(){
  var cheetModel = new CheetModel(0, "Doing the Weekend Challenge...");
  expects.isTrue(cheetModel.display() === "Doing the Weekend Challenge...")
}

displayCheetModel();
