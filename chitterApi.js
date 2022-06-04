class ChitterApi {
  async loadPeeps(callback) {
    try {
      const response = await fetch("http://localhost:3000/peeps");
      const notes = await response.json();
      return callback(notes);
    } catch (error) {
      console.log(error);
    }
  }
 
}


module.exports = ChitterApi;