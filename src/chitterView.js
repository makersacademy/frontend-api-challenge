class ChitterView {
  constructor (rootDiv) {
    this._rootDiv = rootDiv
  }

  displayPeeps (peeps) {
    this._clearRootDiv()

    const peepListItemElements = peeps.map((peep) => {
      return this._createPeepListItemElement(peep)
    })

    const peepUnorderedListElement = this._createPeepUnorderedListElement(peepListItemElements)
    this._rootDiv.append(peepUnorderedListElement)
  }

  _createPeepListItemElement (peep) {
    const handle = document.createElement('p')
    const body = document.createElement('p')
    const createdAt = document.createElement('p')
    const likes = document.createElement('p')
    const peepListItemElement = document.createElement('li')

    handle.append(`${peep.user.handle}`)
    body.append(`${peep.body}`)
    createdAt.append(`${peep.created_at}`)
    likes.append(`${peep.likes.length}`)

    peepListItemElement.append(handle, body, createdAt, likes)
    return peepListItemElement
  }

  _createPeepUnorderedListElement (peepListItemElements) {
    const peepUnorderedListElement = document.createElement('ul')
    peepUnorderedListElement.append(...peepListItemElements)
    return peepUnorderedListElement
  }

  _clearRootDiv () {
    this._rootDiv.innerHTML = ''
  }
}

module.exports = ChitterView
