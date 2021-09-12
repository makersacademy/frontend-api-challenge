"use strict";

class Peep {
  async sendPeep(token, id, peep) {
    const response = await fetch(
      "https://chitter-backend-api-v2.herokuapp.com/peeps",
      {
        method: "POST",
        body: JSON.stringify({
          peep: { user_id: id, body: peep },
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Token token=${token}`,
        },
      }
    );
    await response.json();
    document.querySelector("#peepsent").innerHTML =
      "Your peep was sent successfully!";
  }
}
