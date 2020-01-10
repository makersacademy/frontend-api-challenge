function PeepController (peeps) {
  this.peeps = peeps
}

PeepController.prototype = (function () {
  function displayPeeps (element = $('#app')) {
    var peepHTML = this.peeps.display()
    console.log(this.peeps.display())
    element.innerHTML = peepHTML
  }

  return {
    displayPeeps: displayPeeps
  }
})()