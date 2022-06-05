class ChitterApi {

  async loadPeeps(callback) {
    try {
      const response = await fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps`);
      const peeps = await response.json();
      return callback(peeps);
    } catch(error) {
      console.log('loadNotes error:', error);
    }
  }

  async createPeep(peep, callback) {
    try { 
      const response = await fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ "content": peep })
        });
      const peeps = await response.json();
      return callback(peeps);
    } catch (error) {
      console.log('createNote error:', error)
    }
  };
};

module.exports = ChitterApi;