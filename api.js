class NotesApi {
  loadAllPeeps(callback) {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then((response) => response.json())
      .then((json) => callback(json));
  }
  // createNote() {
  //   fetch("https://example.com/profile", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Success:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }
}

module.exports = NotesApi;
