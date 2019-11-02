(function(exports) {

  function ChitterView(main) {
    this.main = main
    this.peepFeed = _peepFeed()
    main.append(div)
    
  }
  
  ChitterView.prototype = {
    updateFeed: (data) => {
      data.forEach(peep => {
        $('#peep-feed').append(PeepView.createPeep(peep))
      });
    }
  }

  var _peepFeed = function() {
    console.log(1)
    div = $('<div/>', {
      id: 'peep-feed',
      class: 'peep-feed'
    })
    return div
  }

  exports.ChitterView = ChitterView
})(this)