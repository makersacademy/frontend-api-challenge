(function(exports) {

  function ChitterView(main) {
    main.append(_peepFeed)
    
    this.loggedOut()
  }
  
  ChitterView.prototype = {
    updateFeed: (data) => {
      _clearFeed()
      data.forEach(peep => {
        $('#peep-feed').append(peep)
      });
    },
    viewPeep: function(peep) {
      _clearFeed()
      $('#peep-feed').append(peep)
    },
    loggedIn: function() {
      button = $('#login-logout')
      button.text('Log out')
    },
    loggedOut: function() {
      button = $('#login-logout')
      button.text('Log in')
    }
  }
  
  var _clearFeed = function() {
    feed = $('#peep-feed')
    feed.children().remove()
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