function displayViewList(){
  var cheetListModel = new CheetListModel();
  var cheetListView = new CheetListView(cheetListModel);
  cheetListModel.add("Hey, I'm on Chitter.");
  cheetListModel.add("Have a nice day everyone!");
  
  var post_1 = "<li><div><a href='#cheet/0'>Hey, I'm on Chitter.</a></div></li>";
  var post_2 = "<li><div><a href='#cheet/1'>Have a nice day ever...</a></div></li>";
  var result = `<ul>${post_1 + post_2}</ul>`;
  expects.isTrue(cheetListView.inHTML() === result);
}

function checkIfLongNote(){
  var cheetListModel = new CheetListModel();
  var cheetListView = new CheetListView(cheetListModel);
  cheetListModel.add("Hey, I'm on Chitter. Have a nice day everyone.");
  
  var result = "<ul><li><div><a href='#cheet/0'>Hey, I'm on Chitter....</a></div></li></ul>";
  expects.isTrue(cheetListView.inHTML() === result);
}

displayViewList();
checkIfLongNote();
