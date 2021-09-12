"use strict";

class Peep {
  sendPeep(token, id, peep) {
    return fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
      method: "POST",
      body: JSON.stringify({
        peep: { user_id: id, body: peep },
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Token token=${token}`,
      },
    })
      .then((response) => response.json())
      .then(() => {
        document.querySelector("#peepsent").innerHTML =
          "Your peep was sent successfully!";
      });
  }
}
