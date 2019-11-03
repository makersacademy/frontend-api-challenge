$(document).ready(function (){
  var main = $('#main')
  new ChitterController(APIModel,
                        new ChitterView(main),
                        new PeepController(PeepView))
})