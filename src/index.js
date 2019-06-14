$(document).ready(function() {
  peep = new Peep();

  peep.getPeeps(displayPeeps);
});


function displayPeeps(data) {
  var list = '';
  data.forEach(function(peep) {
    list += ` <div class="peep row">`;
    list += `   <div class="col-md-8 handle">@${peep.user.handle}</div>`;
    list += `   <div class="col-md-4 created">${formatDate(peep.created_at)}</div>`;
    list += `     <div class="row">`;
    list += `       <div class="col-md-12 peepBody">${peep.body}</div>`;
    list += `     </div>`;
    list += `   </div>`;
  });
  $('#peepContainer').show();
  $(list).appendTo('#peepContainer');
}

function formatDate(date) {
  var nDate = new Date(date).toLocaleString();
  return nDate;
}
