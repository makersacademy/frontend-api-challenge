import { Peep } from './peep.js'
import { PeepCollection } from './peepCollection.js'
import { User } from './user.js'
import * as Show from './showHelpers.js'

document.addEventListener("DOMContentLoaded", () => {
    let user = new User("testUser42", "testPassword42");
    user.createAccount();
    console.log(User.current);
    Show.allPeeps();
})

