const createUser = require('./api_requests/createUser')
const viewingPeeps = require('./api_requests/viewingPeeps')

//let contentsDiv = document.querySelector("#contents")

let peepContainer = () => { 
  let container = document.createElement("div") 
  container.id = "peepContainer"
  //container.classList.add("container")
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

let newPeepContainer = () =>{
  let newContainer = document.createElement("div")
  newContainer.id = "newPeepContainer"
  newContainer.classList.add("container")
  document.body.prepend(newContainer)
}

newPeepContainer()


let createPeep = document.getElementById('createpeep')
let peepBoxState = false 


createPeep.addEventListener("click", () =>{
  //add in condition to make it so the box doesnt appear twice
    if (peepBoxState === false){
      let peepBox = document.createElement("textarea")
      peepBox.setAttribute("type", "text");
      peepBox.id = "newPeep"
      peepBox.maxLength = 140
      peepBox.placeholder = "What's on your mind?"
      document.getElementById("newPeepContainer").prepend(peepBox)
      let peepSubmit = document.createElement("BUTTON")
      peepSubmit.innerText = "Send"
      peepSubmit.id = "sendPeep"
      document.getElementById("newPeepContainer").prepend(peepSubmit)
      peepBoxState = true
    }
  })

peepSubmit.addEventListener("click", ()=>{
  // set peepBox back to false
  document.getElementById("newPeepContainer").removeChild()
})


createUser("handle470", "123456", (output) =>{
  console.log(output)
})