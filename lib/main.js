$(function (){

  var $peeps = $('#list');
  var $text = $("peep-text");

  $.ajax({
    type: "GET",
    url: 'https://chitter-backend-api.herokuapp.com/peeps',
    success: function(peeps) {
      $.each(peeps , function(index, peep){
        $peeps.append('<a>' + peep.user.handle.toUpperCase() + '<a/>' + '<b>' +  '<li>' + peep.body  + '</li>' + '</b>');
      });
    },
      error: function() {
        alert('error loading peeps');
      }
    });

    $('#add-peep').on('click', function(){
      var peep =  {
        "peep": {
          "user_id":1,
          "body": $text.val(),
          "user": {
            "id": 1,
            "handle": "kay"
          }
        }
      }
      
        $.ajax({
          type: 'POST',
          url: 'https://chitter-backend-api.herokuapp.com/peeps',
          data: peep,
          success: function(newPeep) {
              $peeps.append('<a>' + newPeep.user.handle.toUpperCase() + '<a/>' + '<b>' +  '<li>' + newPeep.body  + '</li>' + '</b>');
          },
          
          error: function(){
            alert('error creating a peep')
          }
          })
    })
  });
