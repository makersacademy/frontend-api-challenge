function displayCheets(){
  var cheet = new Cheet(0, "Doing the Weekend Challenge...");
  expects.isTrue(cheet.display() === "Doing the Weekend Challenge...")
}

displayCheets();