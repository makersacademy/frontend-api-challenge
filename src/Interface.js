document.addEventListener('DOMContentLoaded', () => {

  function updateTimeLine () {
    let newListItem;
    async function result() {
      const result = await Peep.all();
      result.slice(0, 20).forEach(function(peep) {
        newListItem = document.createElement("li");
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

  function returnToTimeLine() {
    document.querySelector("#timeline").style.display = "block";
    document.querySelector("#addPeepContainer").style.display = "block";
    document.querySelector("#userContainer").style.display = "block";
    document.querySelector("#singlePeep").style.display = "none";
    document.querySelector("#loginContainer").style.display = "none";
  }

  
  document.querySelector("#showTimeline").addEventListener("click", () => {
    returnToTimeLine()
});

  updateTimeLine();

  function updateUserSection() {
    if (sessionStorage.sesssionId) {
      document.querySelector("#userContainer").style.display = "none";
      document.querySelector("#greetUser").innerHTML = "Hello user"
    }
  }

  function addPeepToTimeLine(peepText, newPeepId) {
    newPeepItem = document.createElement("li");
    newPeepItem.appendChild(document.createTextNode(peepText));
    newPeepItem.id = newPeepId
    document.querySelector("#timeline").appendChild(newPeepItem)
  }


  document.querySelector("#addPeep").addEventListener("click", () => {
    async function result() {
      const peepText = document.getElementById("peepText").value;
      let newPeep = await Peep.addPeep(peepText);
      let newPeepId = newPeep.id
      document.getElementById("peepText").value = "";
      addPeepToTimeLine(peepText, newPeepId);
    }
    result();
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

  document.querySelector("#loginUser").addEventListener("click", () => {
    async function result() {
      const loginHandle = document.getElementById("newHandle").value;
      const loginPassword = document.getElementById("newPassword").value;
      let sessionId = await Session.newSession("test123", "test123")
      sessionStorage.setItem('sesssionId', sessionId.sessionKey);
    }
    result();
    returnToTimeLine();
    updateUserSection();
  });

  document.querySelector("#goToLoginPage").addEventListener("click", () => {
    document.querySelector("#timeline").style.display = "none";
    document.querySelector("#addPeepContainer").style.display = "none";
    document.querySelector("#userContainer").style.display = "none";
    document.querySelector("#loginContainer").style.display = "block";
  });
});
