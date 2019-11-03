(function(exports) {

  function ChitterView(main) {
    main.append(_peepFeed)
    
    this.loggedOut()
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

  var _peepFeed = function() {
    div = $('<div/>', {
      id: 'peep-feed',
      class: 'peep-feed'
    })
    return div
  }

  exports.ChitterView = ChitterView
})(this)