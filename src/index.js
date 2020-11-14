$(document).ready(function() {

  updatePeepList(exportPeepListAsHTML);

  function updatePeepList() {
    $.get("https://chitter-backend-api-v2.herokuapp.com/peeps", function(data) {
      let peepListHTML = exportPeepListAsHTML(data);
      $('#peep-list').html(peepListHTML);
  });
};

})
