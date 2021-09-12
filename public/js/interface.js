import { Peep } from './peep.js'
import { PeepCollection } from './peepCollection.js'

document.addEventListener("DOMContentLoaded", () => {
    showPeeps();
})

function showPeeps() {
    Peep.fetchAll().then(() => {
        Peep.all.forEach((peep) => {
            let peepDiv = document.createElement("div");
            let peepBody = document.createElement("div");
            let peepInfo = document.createElement("div");
            let peepAuthor = document.createElement("span");
            let peepDate = document.createElement("span");

            peepBody.innerHTML = peep.body;
            peepAuthor.innerHTML = `posted by ${peep.user.handle} `;
            peepDate.innerHTML = `on ${peep.created_at}`;

            peepBody.setAttribute("class", "peep-body");
            peepInfo.setAttribute("class", "peep-info");
            peepBody.setAttribute("class", "peep-body");
            peepAuthor.setAttribute("class", "peep-author");
            peepDate.setAttribute("class", "peep-date");

            peepInfo.appendChild(peepAuthor);
            peepInfo.appendChild(peepDate);

            peepDiv.appendChild(peepBody);
            peepDiv.appendChild(peepInfo);

            document.querySelector("body").appendChild(peepDiv);
        })
    })
}
