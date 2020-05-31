let request = new XMLHttpRequest()
request.open('GET', 'https://chitter-backend-api-v2.herokuapp.com/peeps', true)
request.onload = function() {
  let peeps = JSON.parse(this.response)
  peeps.forEach(peep => {
    let peepElement = document.createElement('TABLE')
    peepElement.setAttribute('id', 'table')
    let row = document.createElement('TR')
    row.setAttribute('id', 'row')
    let col = document.createElement('TD')
    let col1 = document.createElement('TD1')
    let text = document.createTextNode(peep.body)
    let text1 = document.createTextNode(`${peep.user["handle"]}:`)
    document.body.appendChild(peepElement)
    document.getElementById('table').appendChild(row)
    col.appendChild(text1)
    col1.appendChild(text)
    document.getElementById('table').appendChild(col)
    document.getElementById('table').appendChild(col1)
  });
}
request.send()
