function displayModelList(){
  var cheetListModel = new CheetListModel();
  cheetListModel.add("Hey, I'm on Chitter.");
  cheetListModel.add("Have a nice day everyone!");
  expects.isTrue(cheetListModel.display()[0].id === 0);
  expects.isTrue(cheetListModel.display()[0].post === "Hey, I'm on Chitter.");
  expects.isTrue(cheetListModel.display()[1].id === 1);
  expects.isTrue(cheetListModel.display()[1].post === "Have a nice day everyone!");
}

displayModelList();
