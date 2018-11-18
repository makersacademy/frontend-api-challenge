document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('showAllPeeps')
  button.addEventListener("click", function () {
    if( button.style.display == "none" ) {
      button.style.display = "block";
    }
    listAllPeeps()
  })
})

// function nestTags(a, b, c) {
//   var nodes = arguments;
//     for(var i = 1; i < nodes.length; i++) {
//       nodes[i - 1].appendChild(nodes[i]);
//     }
//   };
