document.addEventListener("DOMContentLoaded", function() {
  let peeps = [];
  let peepList = document.getElementById("peep-list");
  reloadPeeps();

  function reloadPeeps () {
    getPeeps();
    setTimeout(function(){
      printPeeps();
    },1000);
  }

  function getPeeps () {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
    .then(response => response.json())
    .then(data => {
      let i;
      peeps = [];
      for (i = 0; i < 10; i++) {
        console.log(data);
        console.log(data[i].body);
        peeps.push({body: data[i].body, created: data[i].created_at, userId: data[i].user.id, userHandle: data[i].user.handle, likes: data[i].likes});
      }
    });
  }

  function printPeeps(){
    peepList.innerHTML = "";
    peeps.forEach(function(peep){
      var div = document.createElement('div');
      div.setAttribute("id", peeps.indexOf(peep));
      div.innerHTML += peep.body;
      peepList.appendChild(div);
      console.log("added peep");
    });
  }

  function hideFullPeep(){
    document.getElementById("full-text").style.display = "none";
  }

  function showFullPeep(){
    document.getElementById("full-text").style.display = "block";
  }

  function showPeepsList (){
    peepList.style.display = "block";
  }

  function hidePeepsList (){
    peepList.style.display = "none";
  }

  peepList.addEventListener('click', function(event){
     if (event.target !== this) {
       showFullPeep();
       let num = event.target.id;
       peepList.style.display = "none";
       document.getElementById("full-text").textContent = peeps[num].body;
       console.log(num);
       console.log(peeps[num].body);
     }
  });

  document.getElementById("allPeeps-button").addEventListener('click', function(event){
      console.log(document.getElementById("full-text").innerHTML);
      hideFullPeep();
      showPeepsList();
   });

});
