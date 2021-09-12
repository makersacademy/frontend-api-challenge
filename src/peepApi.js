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

  static addPeep(peepText) {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : "Token token=_2a_12_XaF1txelAhWlNDv0U4d7_O"
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify({
        "peep": {"user_id":34, "body": peepText}
      })
    });

  }
}