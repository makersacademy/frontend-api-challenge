postPeep = (session_id, session_key) => {
  fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
    method: "post",
    headers: {
      "Authorization":`Token token=${session_key}`,
      "Content-Type":"application/json"
    },
    body: JSON.stringify({ 
      "peep":{
        "user_id":`${session_id}`,
        "body":document.querySelector('#textArea').value
      }
    })
  })
};

module.exports = postPeep;