var ListOfCheets = function(){
  this.list = [];
  this.id = 0;
}

ListOfCheets.prototype = (function(){
  function add(post){
    this.list.push(new Cheet(this.id, post));
    this.id ++;
  }

  function display(){
    return this.list;
  }return{
    add: add,
    display: display
  }
})()