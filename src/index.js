$(document).ready(function (){

  var apiModel = new APIModel
  new PeepController(
    apiModel,
    PeepListView
  )

}) 