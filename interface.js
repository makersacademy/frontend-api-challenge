document.addEventListener('DOMContentLoaded', () => {
  const quackboard = new QuackBoard()

  quackboard.getQuacks().then((quacks) => {
    let ul = document.getElementById("current-quacks");
    ul.innerHTML = "";
    quacks.forEach((quack) => {
      let li = document.createElement("li");
      li.innerHTML = `"${quack.body}" quacked by ${quack.user.handle}, at ${quack.created_at}`
      ul.appendChild(li);
    })
    
  })
})
