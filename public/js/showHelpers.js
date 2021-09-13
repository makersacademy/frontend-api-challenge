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
    .then(() => document.querySelector("body").appendChild(backDiv()))
}

export function peepWithID(id) {
    Peep.fetchByID(id).then(() => {
        clearPage();
        one(Peep.selected);

        document.querySelector(".peep-div").append(backDiv());
    })
}

export function one(peep) {
    let peepDiv = document.createElement("div");
    let peepBody = document.createElement("div");
    let peepInfo = document.createElement("div");
    let peepAuthor = document.createElement("span");
    let peepDate = document.createElement("span");

    peepBody.innerHTML = peep.body;
    peepAuthor.innerHTML = `posted by <span class="handle">${peep.user.handle}<span> `;
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

export function newUserForm() {
    let newUserForm = document.createElement("form");
    let handleField = document.createElement("input");
    let passwordField = document.createElement("input");
    let submitButton = document.createElement("button");

    newUserForm.setAttribute("class", "new-user-form");
    handleField.setAttribute("class", "handle-field");
    passwordField.setAttribute("class", "password-field");

    handleField.setAttribute("type", "text");
    passwordField.setAttribute("type", "password");

    submitButton.innerHTML = "create user";

    newUserForm.appendChild(handleField);
    newUserForm.appendChild(passwordField);
    newUserForm.appendChild(submitButton);

    document.querySelector("body").appendChild(newUserForm);
}

function backDiv() {
    let div = document.createElement("div");
    let link = document.createElement("span");

    link.setAttribute("class", "back-link")
    link.innerHTML = "back to all peeps";
    link.addEventListener("click", () => allPeeps());

    div.appendChild(link);

    return div;
}

function clearPage() {
    let body = document.querySelector("body");
    while(body.firstChild) { body.removeChild(body.firstChild) }
}
