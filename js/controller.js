
$(document).ready(function () {
  chitter = new Chitter();

  var $bsAlert = $(".alert");

  $bsAlert.on("close.bs.alert", function () {
    $bsAlert.attr('hidden','true');
    return false;
  });

  setTimeout(function () { chitter.createFeed(); }, 10);

  $("#login-form").submit(function (event) {
    event.preventDefault(); 
    var handle = $("input#username").val();
    var password = $("input#password").val();
    chitter.loginUser(handle, password);
    
  });

  
  $("#register-form").submit(function (event) {
    event.preventDefault(); 
    var handle = $("input#username").val();
    var password = $("input#password").val();
    chitter.register(handle, password);
  });

  $("#logout").click(function () {
    $("#banner-and-nav-logged-in").attr('hidden', 'true');
    $("#banner-and-nav-register").removeAttr('hidden');
    chitter.user_id = null;
    chitter.username = null;
    chitter.session_id = null;
  });

      // Leave the following one - it's the whole thing
});

