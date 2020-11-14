export default class PeepView {
  makeHTML(list) {
    let allPeeps = ""
    list.map(function(peep){
      allPeeps += `<li>${peep.user.handle} posted: <br> ${peep.body}  <a id="${peep.id}" href="#peeps/${peep.id}">View Peep</a><br><br></li>`
    })
    var peepsDiv = document.createElement('div')
    peepsDiv.setAttribute("id", "peeps")
    document.body.appendChild(peepsDiv)
    peepsDiv.innerHTML = allPeeps
  }

  singlePeepHTML(peep) {
    var peepsDiv = document.getElementById("peeps")
    peepsDiv.innerHTML = peep.body
  }
}

