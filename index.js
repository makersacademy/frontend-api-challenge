const viewingPeeps = require('./api_requests/viewingPeeps')

//let contentsDiv = document.querySelector("#contents")

let content = () => { document.createElement("div") }

content()

viewingPeeps((data) => {
  data.forEach(x => {
    console.log(x)
    document.write(x.body)
    let div = document.createElement("div")
    div.innerText = x.body
    div.id = `peep${x.id}`
    div.class = "peep"
    document.body.appendChild(div)
    //document.getElementById(`#peep${x.id}}`).innerText = x.body
  })
})
