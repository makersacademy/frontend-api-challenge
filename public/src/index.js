$(document).ready(function (){
  var main = $('#main')
  new ChitterController(ChitterModel, new ChitterView(main))
})