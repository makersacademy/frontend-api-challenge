document.addEventListener('DOMContentLoaded', () => {
  const quackboard = new QuackBoard()

  quackboard.getQuacks().then((data) => {
    document.querySelector('#current-quacks').innerText = data
  })
})
