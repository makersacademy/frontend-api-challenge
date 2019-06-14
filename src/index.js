$(document).ready(function() {
  getPeeps(displayPeeps);


});

function getPeeps(callback) {
  $.ajax({
    url: "https://chitter-backend-api.herokuapp.com/peeps",
    type: "GET",
    error: function() {
      return "Error loading peeps";
    },
    success: function(result) {
      callback(result);
    }
  });
}

function displayPeeps(data) {
  var list = '';
  data.forEach(function(item) {
    list += `<div class="peep">`;
    list += ` <div class="row">`;
    list += `   <div class="col-md-4 offset-md-8 created">${item.created_at}</div>`;
    list += `     <div class="row">`;
    list += `       <div class="col-md-12 peepBody">`;
    list += `       </div>`;
    list += `     </div>`;
    list += `   </div>`;
    list += `  </div>`;
    list += `<p>${item.user.handle}</p>`
  });
  $(list).appendTo('#peepContainer');
}
