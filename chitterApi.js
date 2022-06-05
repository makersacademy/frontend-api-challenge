class ChitterApi {

  async loadPeeps() {
    const response = await fetch(
      `https://chitter-backend-api-v2.herokuapp.com/peeps`
    );
    const peeps = await response.json();
    return peeps;
  }
  

  async createPeep(peep) {
    const response = await fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "content": peep })
    });
    const peeps = await response.json();
    return peeps
  }

};

module.exports = ChitterApi;