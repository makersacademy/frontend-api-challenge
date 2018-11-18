document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('showAllPeeps')
  var allPeeps = document.getElementById('allPeeps')
  button.addEventListener("click", function () {
    if( allPeeps.style.display == "none" ) {
      allPeeps.style.display = "block"
    } else {
      allPeeps.style.display = "none"
    }
    listAllPeeps()
  })
})
