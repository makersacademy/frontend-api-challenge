const tweetTable = viewallpeeps.querySelector("ul");

fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i <= data.length - 1; i++) {
      const tweet = document.createElement("li");
      tweet.innerHTML =
        data[i].created_at + "   <a href = '/'>" + data[i].body + "</a>";
      tweetTable.appendChild(tweet);
    }
  });
