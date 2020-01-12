(function (exports) {

  function _body (body) {
    return `<p>${body}</p>`
  }

  // function _author (author) {
  //   return `<p>${author}</p>`
  // }

  function toHTML (peepData) {
    str = ''
    peepData.forEach(function (peep) {
      str += `${_body(peep.body)}`
    })
    return `<div>${str}</div>`
  }
  
  var PeepListView = {
    toHTML: toHTML
  }

  exports.PeepListView = PeepListView
})(this)