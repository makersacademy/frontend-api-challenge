window.onload = function() {

  var app = new App()
  var peeplist = document.querySelector(".PeepList")

  $('#get-peeps').click(function() {
    app.getPeeps()
  })
}
