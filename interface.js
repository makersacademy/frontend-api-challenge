view.addEventListener('click', function(){
    showPeeps();
})

search.addEventListener('click', function(){
    let element = document.getElementById("peep").value;
    console.log(element)
    singlePeep(element);
})

function showPeeps(){
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps').then(function(res){
    return res.json()
}).then((data) => {
    let text = [`<ul>`]
    let peeps = data.forEach(peep => text.push(
      `
      <li id="${peep.id}">${peep.body} <br> ${peep.user.handle} <br><br>
      
      </li>
      `
    ))
    text.push(`</ul>`)
    list.innerHTML = text.join('')
  })
}
function singlePeep(id){
    fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${id}`).then(function(res){
    return res.json()
}).then(function(data){
    let text = [`<ul>`]
    text.push(data.body," from: ",data.user.handle)
    text.push(`</ul>`)
    main.innerHTML = text.join('')
})
}
