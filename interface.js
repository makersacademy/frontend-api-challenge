var session_key;
var user_id;

$(document).ready(function(){
  var response;
  var i;

  $.get('https://chitter-backend-api.herokuapp.com/peeps', function(data) {
    var response = data;
    for (var i = 0; i < response.length; i++) {
      var dateTime = response[i].created_at
      peep = "<li id="+response[i].id+">"+ "<div class='peep-info'>@" + response[i].user.handle + " - " + getTimeValue(dateTime) +  
            "</div> <div class='peep'>" + response[i].body + "</div></li>"
      $('.peeps').append(peep);
      individualPeep(response[i].id);
    };
  });
  
  function individualPeep(id) {
    $('#'+id).click(function () {
      popup();
      $.get('https://chitter-backend-api.herokuapp.com/peeps/'+id, function(peep) {
        $('.singlePeepInfo').text(peep.user.handle);
        $('.singlePeep').text(peep.body);
      });
    });
  };

  $('.go').click(function() {
    username = $('.username').val();
    password = $('.password').val();
    login(username, password);
  });

  $('.login').click(function () {
    dropdown();
  });

  $('.logout').click(function() {
    logout();
  });

  function logout() {
    session_key = "";
    user_id = "";
    $('.logout').hide();
    $('.login').show();
    $('.new-peep').hide();
  };

  function login (username, password) {
    $.ajax
    ({
        type: "POST",
        url: 'https://chitter-backend-api.herokuapp.com/sessions',
        contentType: 'application/json',
        async: false,
        data: JSON.stringify({"session": {"handle":username, "password":password}}),
        success: function (data) {
        successfulLogin(data); 
      }
    });
  };

  function successfulLogin(data) {
    session_key = data.session_key;
    user_id = data.user_id;
    $('.login').hide();
    $('.logout').show();
    $('.new-peep').show();
    $(".logindropdown").fadeOut(); 
  };

  function popup() {
    $('.popup').fadeIn(500);
    $(".cover").fadeTo(500, 0.5);

    $(".close").click(function () {
      $(".popup").fadeOut(500);
    });
  };

  function dropdown() {
    $('.logindropdown').slideDown();

    $(".close").click(function () {
      $(".logindropdown").slideUp();
    });
  };

  function getTimeValue(datetime) {
    var tTime=new Date(datetime);
    var cTime=new Date();
    var sinceMin=Math.round((cTime-tTime)/60000);
    if(sinceMin==0)
    {
        var sinceSec=Math.round((cTime-tTime)/1000);
        if(sinceSec<10)
          var since="less than 10 seconds ago";
        else if(sinceSec<20)
          var since="less than 20 seconds ago";
        else
          var since="half a minute ago";
    }
    else if(sinceMin==1)
    {
        var sinceSec=Math.round((cTime-tTime)/1000);
        if(sinceSec==30)
          var since="half a minute ago";
        else if(sinceSec<60)
          var since="less than a minute ago";
        else
          var since="1 minute ago";
    }
    else if(sinceMin<45)
        var since=sinceMin+" minutes ago";
    else if(sinceMin>44&&sinceMin<60)
        var since="about 1 hour ago";
    else if(sinceMin<1440){
        var sinceHr=Math.round(sinceMin/60);
    if(sinceHr==1)
      var since="about 1 hour ago";
    else
      var since="about " +sinceHr+ " hours ago";
    }
    else if(sinceMin>1439&&sinceMin<2880)
        var since="1 day ago";
    else
    {
        var sinceDay=Math.round(sinceMin/1440);
        var since=sinceDay+" days ago";
    }
    return since;
    };
   
});