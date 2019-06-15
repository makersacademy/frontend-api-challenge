$(document).ready(function() {
  peep = new Peep();

  peep.getPeeps("", displayPeeps);

});


function displayPeeps(data) {
  $('#peepContainer').html('');
  var list = '';

  if (data.length > 1) {
    data.forEach(function(peep) {
      list += ` <div class="peep row">`;
      list += `   <div class="col-md-8 handle">`;
      list += `   @${peep.user.handle}`;
      list += `   <input type="hidden" value="${peep.id}" />`;
      list += `   </div>`;
      list += `   <div class="col-md-4 created">${formatDate(peep.created_at)}</div>`;
      list += `     <div class="row">`;
      list += `       <div class="col-md-12 peepBody">${peep.body}</div>`;
      list += `     </div>`;
      list += `   </div>`;
    });
  } else {
    list += ` <div class="peep row">`;
    list += `   <div class="col-md-8 handle">`;
    list += `   @${data.user.handle}`;
    list += `   <input type="hidden" value="${data.id}" />`;
    list += `   </div>`;
    list += `   <div class="col-md-4 created">${formatDate(data.created_at)}</div>`;
    list += `     <div class="row">`;
    list += `       <div class="col-md-12 peepBody">${data.body}</div>`;
    list += `     </div>`;
    list += `   </div>`;
  }

  $('#peepContainer').show();
  $(list).appendTo('#peepContainer');

  $('.peep').on('click', function() {
    var peepId = $(this).find(".handle input").val();
    peep.getPeeps(peepId, displayPeeps);
  });
}

function formatDate(date) {
  var nDate = new Date(date).toLocaleString();
  return nDate;
}

function displaySinglePeep(data) {

}
