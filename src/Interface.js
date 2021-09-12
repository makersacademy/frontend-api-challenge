document.addEventListener('DOMContentLoaded', () => {

  function updateTimeLine () {
    async function result() {
      const result = await Peep.all();
      let str = '<ul>'
      result.slice(0, 20).forEach(function(peep) {
        str += '<li>'+ peep.body + '</li>';
        });  
        str += '</ul>';
        document.querySelector("#timeline").innerHTML = str;
    }
    result();
  };

  Session.newSession("test", "test")
  updateTimeLine();


  document.querySelector("#addPeep").addEventListener("click", () => {
      const peepText = document.getElementById("peepText").value;
      Peep.addPeep(peepText);
      document.getElementById("peepText").value = "";
      updateTimeLine();
  });

  document.querySelector("#addUser").addEventListener("click", () => {
    const newHandle = document.getElementById("newHandle").value;
    const newPassword = document.getElementById("newPassword").value;
    User.addUser(newHandle, newPassword);
    document.getElementById("newHandle").value = "";
    document.getElementById("newPassword").value = "";
  });
});
