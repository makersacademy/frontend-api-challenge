var CheetListModel = function(){
  this.list = [];
  this.id = 0;
}

CheetListModel.prototype = (function(){

  function add(post){
    this.list.push(new CheetModel(this.id, post));
    this.id ++;
  }

  function display(){
    return this.list;
  }return{
    add: add,
    display: display
  }
})()
