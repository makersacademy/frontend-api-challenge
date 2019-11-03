(function(exports) {

  function ChitterView(main) {
    main.append(_peepFeed)
    
  }
  
  ChitterView.prototype = {
    updateFeed: (data) => {
      data.forEach(peep => {
        $('#peep-feed').append(peep)
      });
    },
    viewPeep: function(peep) {
      main = $('#main')
      main.children().remove()
      main.append(peep)
    }
  }

  var _peepFeed = function() {
    div = $('<div/>', {
      id: 'peep-feed',
      class: 'peep-feed'
    })
    return div
  }

  exports.ChitterView = ChitterView
})(this)