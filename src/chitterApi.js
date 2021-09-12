class chitterApi {
  constructor() {
    this.apiUrl = "https://chitter-backend-api-v2.herokuapp.com/peeps";
  }
  async fetchAll() {
    return await fetch(this.apiUrl)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return response;
      });
  }
}
