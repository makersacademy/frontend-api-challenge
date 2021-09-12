class chitterApi {
  async fetchAll() {
    return await fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return response;
      });
  }
}
