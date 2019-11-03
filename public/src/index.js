$(document).ready(function (){
  var main = $('#main')
  apiModel = new APIModel
  new ChitterController(apiModel,
                        new ChitterView(main),
                        new PeepController(PeepView, apiModel))
})