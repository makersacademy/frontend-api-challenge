import { Peep } from './peep.js'
import { PeepCollection } from './peepCollection.js'

document.addEventListener("DOMContentLoaded", () => {
    showPeeps();
})

function showPeeps() {
    Peep.fetchAll().then(() => {
        Peep.all.forEach((peep) => {
            let peepDiv = document.createElement("div");
            peepDiv.innerText = peep.body;
            document.querySelector("body").appendChild(peepDiv);
        })
    })
}
