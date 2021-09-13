import { Peep } from './peep.js'
import { PeepCollection } from './peepCollection.js'

document.addEventListener("DOMContentLoaded", () => {
    showPeepWithID(700);
})

function showAllPeeps() {
    clearPage();

    Peep.fetchAll().then(() => {
        Peep.all.forEach((peep) => { showPeep(peep) })
    })
}

function showAllBy(key, val) {
    clearPage();

    let peeps = new PeepCollection(key, val);

    peeps.refresh()
    .then(() => peeps.all.forEach((peep) => showPeep(peep)))
}

function showPeepWithID(id) {
    Peep.fetchByID(id).then(() => {
        let peep = Peep.selected

        clearPage();
        showPeep(peep);
    })
}

function showPeep(peep) {
    let peepDiv = document.createElement("div");
    let peepBody = document.createElement("div");
    let peepInfo = document.createElement("div");
    let peepAuthor = document.createElement("span");
    let peepDate = document.createElement("span");

    peepBody.innerHTML = peep.body;
    peepAuthor.innerHTML = `posted by ${peep.user.handle} `;
    peepDate.innerHTML = `on ${peep.created_at}`;

    peepDiv.setAttribute("class", "peep-div");
    peepInfo.setAttribute("class", "peep-info");
    peepBody.setAttribute("class", "peep-body");
    peepAuthor.setAttribute("class", "peep-author");
    peepDate.setAttribute("class", "peep-date");

    peepInfo.appendChild(peepAuthor);
    peepInfo.appendChild(peepDate);

    peepDiv.appendChild(peepBody);
    peepDiv.appendChild(peepInfo);

    document.querySelector("body").appendChild(peepDiv);
}

function clearPage() {
    let body = document.querySelector("body");
    while(body.firstChild) { body.removeChild(body.firstChild) }
}
