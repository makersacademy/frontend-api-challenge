document.addEventListener('DOMContentLoaded', () => {

  const updateTimeLine = () => {
    async function result() {
      const result = await Peep.all();
      result.slice(0, 20).forEach(function(peep) {
        let node = document.createElement("LI");                 // Create a <li> node
        let textnode = document.createTextNode(peep.body);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("timeline").appendChild(node);     // Append <li> to <ul> with id="myList"

      })
    }
    result();
  };

  updateTimeLine();

 console.log("hello")
 Peep.addPeep();
});
