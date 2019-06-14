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
    list += ` <div class="peep row">`;
    list += `   <div class="col-md-4 offset-md-8 created">${formatDate(item.created_at)}</div>`;
    list += `     <div class="row">`;
    list += `       <div class="col-md-12 peepBody">${item.body}</div>`;
    list += `     </div>`;
    list += `   </div>`;
  });
  $(list).appendTo('#peepContainer');
}

function formatDate(date) {
  var nDate = new Date(date).toLocaleString();
  return nDate;
}
