class PeepsClient {
  async loadPeeps() {
    try {
      const response = await fetch('http://localhost:8080/peeps');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async createPeep(name) {
    const url = 'http://localhost:8080/peeps';
      
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name })
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