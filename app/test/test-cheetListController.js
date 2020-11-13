function cheetController(){
  var listModel = new CheetListModel();
  var listController = new CheetListController(listModel);
  expects.isTrue(listModel.list[0].post === "Hey, I'm on Chitter. Have a nice day everyone!");
}

function htmlConversion(){
    var listModel = new CheetListModel();
    var listController = new CheetListController(listModel);
    var elem = { innerHTML: 'unchanged' };
    listController.fullCheet(elem);
    expects.isTrue(elem.innerHTML === "<ul><li><div><a href='#cheet/0'>Hey, I'm on Chitter....</a></div></li></ul>");
}

cheetController();
htmlConversion();
