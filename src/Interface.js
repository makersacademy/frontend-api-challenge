document.addEventListener('DOMContentLoaded', () => {

  function updateTimeLine () {
    async function result() {
      const result = await Peep.all();
      result.slice(0, 20).forEach(function(peep) {
        let newListItem = document.createElement("li");
        newListItem.addEventListener("click", () => {
          document.querySelector("#timeline").style.display = "none";
          document.querySelector("#addPeepContainer").style.display = "none";
          document.querySelector("#singlePeep").style.display = "block";
          document.querySelector("#singlePeepText").innerHTML = peep.body;
        })
        newListItem.id = peep.id
        newListItem.appendChild(document.createTextNode(peep.body));
        document.querySelector("#timeline").appendChild(newListItem)
        });  
    }
    result();
  };

  
  document.querySelector("#showTimeline").addEventListener("click", () => {
    document.querySelector("#timeline").style.display = "block";
    document.querySelector("#addPeepContainer").style.display = "block";
    document.querySelector("#singlePeep").style.display = "none";
});





  updateTimeLine();

  function updateUserSection() {
    if (sessionStorage.sesssionId) {
      document.querySelector("#userSignUp").style.display = "none";
      document.querySelector("#greetUser").innerHTML = "Hello user"
    }
  }

  document.querySelector("#addPeep").addEventListener("click", () => {
      const peepText = document.getElementById("peepText").value;
      Peep.addPeep(peepText);
      document.getElementById("peepText").value = "";
      updateTimeLine();
  });

  document.querySelector("#addUser").addEventListener("click", () => {
    async function result() {
      const newHandle = document.getElementById("newHandle").value;
      const newPassword = document.getElementById("newPassword").value;
      // User.addUser(newHandle, newPassword);
      document.getElementById("newHandle").value = "";
      document.getElementById("newPassword").value = "";
      let sessionId = await Session.newSession("test123", "test123")
      sessionStorage.setItem('sesssionId', sessionId.sessionKey);
      updateUserSection();
    }
    result();
  });
});
