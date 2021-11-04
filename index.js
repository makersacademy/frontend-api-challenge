const viewingPeeps = require('./api_requests/viewingPeeps')

//let contentsDiv = document.querySelector("#contents")

let peepContainer = () => { 
  let container = document.createElement("div") 
  container.id = "peepContainer"
  container.classList.add("container")
  document.body.appendChild(container)
}

peepContainer()



viewingPeeps((data) => {
  data.forEach(x => {
    console.log(x)
    let div = document.createElement("div")
    div.innerText = x.body
    div.id = `peep${x.id}`
    div.class = "peep"
    document.getElementById('peepContainer').appendChild(div)
    //document.getElementById(`#peep${x.id}}`).innerText = x.body
  })
})
