(function(exports) {

  function ChitterView(main) {
    this.main = main
    this.peepFeed = _peepFeed()
    main.append(div)
    
  }
  
  ChitterView.prototype = {
    updateFeed: (data) => {
      data.forEach(peep => {
        $('#peep-feed').append(peep)
      });
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