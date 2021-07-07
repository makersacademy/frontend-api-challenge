document.addEventListener('DOMContentLoaded', function () {
  var allbutton = document.getElementById('showAllPeeps')
  var randbutton = document.getElementById('randomPeep')
  var randPeep = document.getElementById('randPeep')
  var allPeeps = document.getElementById('allPeeps')

  allbutton.addEventListener("click", function () {
    if( allPeeps.style.display == "none" ) {
      allPeeps.style.display = "block"
    } else {
      allPeeps.style.display = "none"
    }
    listAllPeeps(url)
  })

  randbutton.addEventListener("click", function () {
    if (randPeep.style.display == "none") {
      randPeep.style.display = "block"
    } else {
      randPeep.style.display = "none"
    }
    randomPeep()
  })
})
