$(document).ready(function (){
  var main = $('#main')
  new ChitterController(new APIModel,
                        new ChitterView(main),
                        new PeepController(PeepView))
})