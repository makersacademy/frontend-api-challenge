export default class PeepView {
  makeHTML(list) {
    let allPeeps = ""
    list.map(function(peep){
      let peepdiv = document.createElement('li')
      allPeeps += `<li>${peep.user.handle} posted: <br> ${peep.body}  <a id="${peep.id}" href="#peeps/${peep.id}">View Peep</a><br><br></li>`
    })
    console.log(allPeeps)
    var peepsDiv = document.createElement('div')
    peepsDiv.setAttribute("id", "peeps")
    document.body.appendChild(peepsDiv)
    console.log(allPeeps)
    peepsDiv.innerHTML = allPeeps
  }
}

