function addCheetsAndDisplay(){
  var listOfCheets = new ListOfCheets();
  listOfCheets.add("Hey, I'm on Chitter.");
  listOfCheets.add("Have a nice day everyone!");
  expects.isTrue(listOfCheets.display()[0].id === 0);
  expects.isTrue(listOfCheets.display()[0].post === "Hey, I'm on Chitter.");
  expects.isTrue(listOfCheets.display()[1].id === 1);
  expects.isTrue(listOfCheets.display()[1].post === "Have a nice day everyone!");
}

addCheetsAndDisplay();