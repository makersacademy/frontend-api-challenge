class peepApi {

  static getPeeps() {
    const url = "https://chitter-backend-api-v2.herokuapp.com/peeps"
    return fetch(url)
      .then(response => response.json())
  }

  static getPeepById(id) {
    const url = "https://chitter-backend-api-v2.herokuapp.com/peeps/"+id+""
    return fetch(url)
      .then(response => response.json())
  }
}