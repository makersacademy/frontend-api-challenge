export default class PeepView {
  makeHTML(list) {
    console.log(list)
    list.map(function(peep){
      let peepdiv = document.createElement('div')
      peepdiv.innerHTML = `${peep.user.handle} posted: <br> ${peep.body}  <a id="${peep.id}" href="#peeps/${peep.id}">View Peep</a><br><br>`
      document.body.appendChild(peepdiv)
    })
  }
}

