$(document).ready(function() {

  const chitter = new chitterAPI();

  $('#getPeeps').click(function() {
    chitter.renderPeeps()
  })

  $('#signUpForm').submit(function() {
    var values = $(this).serialize();
    alert(values); // pop up with our details
  })

})
