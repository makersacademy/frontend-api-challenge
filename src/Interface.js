document.addEventListener('DOMContentLoaded', () => {

  const updateTimeLine = () => {
    async function result() {
      const result = await Peep.all();
      result.forEach(function(peep) {
        console.log(peep)
      })
    }
    result();
  };

  updateTimeLine();

 console.log("hello")
 Peep.find(679);
});
