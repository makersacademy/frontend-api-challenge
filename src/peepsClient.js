class PeepsClient {
  async loadPeeps() {
    try {
      const response = await fetch('https://chitter-backend-api-v2.herokuapp.com/peeps');
      const data = await response.json();
  
      return data.map(peep => ({
        id: peep.id,
        body: peep.body,
        created_at: peep.created_at,
        updated_at: peep.updated_at,
        user: {
          id: peep.user.id,
          handle: peep.user.handle
        },
        likes: peep.likes.map(like => ({
          user: {
            id: like.user.id,
            handle: like.user.handle
          }
        }))
      }));
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async createPeep(newPeep) {
    const url = 'https://chitter-backend-api-v2.herokuapp.com/peeps';
      
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ peep: newPeep })
      });
    
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }  
}

module.exports = PeepsClient;