(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // lib/display/displayPeeps.js
  var require_displayPeeps = __commonJS({
    "lib/display/displayPeeps.js"(exports, module) {
      var displayPeeps2 = (jsonData) => {
        let count = 0;
        let time_now = new Date();
        let peep_area = document.querySelector("#rightColumn");
        peep_area.innerHTML = "";
        while (count < 50) {
          let right_section = document.createElement("div");
          right_section.setAttribute("class", "peep_right");
          let card = document.createElement("div");
          card.setAttribute("id", `peep_${count}`);
          card.setAttribute("class", "peep_card");
          let image = document.createElement("img");
          image.setAttribute("id", `peep_photo_${count}`);
          image.setAttribute("src", "./profile.png");
          image.setAttribute("class", "peep_photo");
          let author = document.createElement("p");
          author.innerText = jsonData[count]["user"]["handle"];
          let content = document.createElement("p2");
          content.innerText = jsonData[count]["body"];
          let time_box = document.createElement("p");
          let peep_time = new Date(jsonData[count]["created_at"]);
          let ms_ago = time_now - peep_time;
          if (ms_ago < 6e4) {
            let s_ago = Math.floor(ms_ago / 1e3);
            time_box.innerText = `posted ${s_ago} second(s) ago`;
          } else if (ms_ago < 36e5) {
            let mi_ago = Math.floor(ms_ago / 6e4);
            time_box.innerText = `posted ${mi_ago} minute(s) ago`;
          } else if (ms_ago < 864e5) {
            let h_ago = Math.floor(ms_ago / 36e5);
            time_box.innerText = `posted ${h_ago} hour(s) ago`;
          } else {
            let d_ago = Math.floor(ms_ago / 864e5);
            time_box.innerText = `posted ${d_ago} day(s) ago`;
          }
          peep_area.appendChild(card);
          card.appendChild(image);
          card.appendChild(right_section);
          right_section.appendChild(author);
          right_section.appendChild(content);
          right_section.appendChild(time_box);
          count += 1;
        }
      };
      module.exports = displayPeeps2;
    }
  });

  // lib/fetches/getPeeps.js
  var require_getPeeps = __commonJS({
    "lib/fetches/getPeeps.js"(exports, module) {
      getPeeps = (displayPeeps2) => {
        fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((data) => displayPeeps2(data));
      };
      module.exports = getPeeps;
    }
  });

  // index.js
  var displayPeeps = require_displayPeeps();
  var getPeeps2 = require_getPeeps();
  getPeeps2(displayPeeps);
})();
