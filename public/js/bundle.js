(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // public/templates/peep.js
  var require_peep = __commonJS({
    "public/templates/peep.js"(exports, module) {
      var peepTemplate2 = (peep) => {
        let likes = peep.likes.length;
        if (peep.likes.length === 0) {
          likes = "";
        }
        return `<div class="peep">
      <img class="peep__author-pic" src="/images/red_egg.jpeg"></img>
      <div class="peep__main">
        <div class="peep__header">
          <div class="peep__author-handle">
            ${peep.user.handle} 
          </div>
          <div class="peep__time-since">
            time since
          </div>
        </div>
        <div class="peep__content">
          <div class="peep__text">
            ${peep.body}
          </div>
        </div>
        <div class="peep__footer">
          <img class="peep__like-icon" src="/images/like_icon.png" width="20" height="20"></img>
          <div class="peep__like-count">
            ${likes}
          </div>
        </div>
      </div>
    </div>`;
      };
      module.exports = peepTemplate2;
    }
  });

  // public/js/index.js
  var peepTemplate = require_peep();
  var peepList = document.getElementById("peep-list");
  var fetchAllPeeps = (callback) => {
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json().then((peeps) => callback(peeps)));
  };
  var showAllPeeps = (peeps) => {
    peeps.forEach((peep) => {
      peepList.insertAdjacentHTML("beforeend", peepTemplate(peep));
    });
  };
  fetchAllPeeps((peeps) => showAllPeeps(peeps));
})();
