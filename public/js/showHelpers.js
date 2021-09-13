import { Peep } from './peep.js'
import { PeepCollection } from './peepCollection.js'

export function allPeeps() {
    clearPage();

    Peep.fetchAll().then(() => {
        Peep.all.forEach((peep) => { one(peep) })
    })
}

export function allBy(key, val) {
    let peeps = new PeepCollection(key, val);

    clearPage();

    peeps.refresh()
    .then(() => peeps.all.forEach((peep) => one(peep)))
}

export function peepWithID(id) {
    Peep.fetchByID(id).then(() => {
        clearPage();
        one(Peep.selected);

        let backDiv = document.createElement("div");
        let backLink = document.createElement("span");

        backLink.setAttribute("class", "back-link")
        backLink.innerHTML = "back to all peeps";
        backLink.addEventListener("click", () => allPeeps());

        backDiv.appendChild(backLink);
        document.querySelector(".peep-div").append(backDiv);
    })
}

export function one(peep) {
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

    peepBody.addEventListener("click", () => peepWithID(peep.id));
    peepAuthor.addEventListener("click", () => allBy("userID", peep.user.id));

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
