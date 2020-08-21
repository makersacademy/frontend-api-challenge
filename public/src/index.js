$(document).ready(function (){
  var main = $('#main')
  var loginButton = $('#login-logout')
  var navBrand = $('.navbar-brand')

  var apiModel = new APIModel

  new SessionController(new SessionView,
                        apiModel,
                        new SessionModel,
                        loginButton)
                        
  new ChitterController(apiModel,
                        new ChitterView(main),
                        new PeepController(PeepView, apiModel),
                        navBrand)
})