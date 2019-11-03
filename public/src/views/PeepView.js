(function(exports) {
  var _createElement = function(type, id, classtext) {
    var element = $(`<${type}/>`, {
      class: classtext,
      id: id
    })
    return element
  }

  var _peepAuthor = function(data) {
    var peepAuthor = $('<h6/>')
    peepAuthor.html(data.user.handle)
    return peepAuthor
  }

  var _peepContent = function(data) {
    var peepContent = $('<p/>')
    peepContent.html(data.body)
    return peepContent
  }

  var _peepTime = function(data) {
    var peepTime = $('<div/>', {
      class: 'text-muted small'
    })
    d = new Date(data.created_at)
    peepTime.html(d.toLocaleString())
    return peepTime
  }

  var createPeepElement = function(peepData) {
    var peep = _createElement('div', 'peep-' + peepData.id, 'card peep-feed-peep')
    var peepBody = _createElement(
      'div',
      'peep-' + peepData.id + '-body',
      'card-body'
      )
    
    var peepAuthor = _peepAuthor(peepData)
    var peepTime = _peepTime(peepData)
    var peepContent = _peepContent(peepData)
    
    peep.append(peepBody)
    peepBody.append(peepAuthor)
    peepBody.append(peepTime)
    peepBody.append(peepContent)
    return peep
  }

  var PeepView = {
    createPeepElement: createPeepElement
  }

  exports.PeepView = PeepView
})(this)