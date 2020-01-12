function displayViewList(){
  var listOfCheets = new ListOfPosts();
  var listOfCheetsView = new ListOfCheetsView(listOfCheets);
  listOfCheets.add("Hey, I'm on Chitter.");
  listOfCheets.add("Have a nice day everyone!");
  
  let post_1 = "<li><div><a>Hey, I'm on Chitter.</a></div></li>";
  let post_2 = "<li><div><a>Have a nice day everyone!</a></div></li>";
  let result = `<ul>${post_1 + post_2}</ul>`;
  expects.isTrue(listOfCheetsView.inHTML() === result);
}

displayViewList();