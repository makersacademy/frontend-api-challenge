"use strict";

document.addEventListener("DOMContentLoaded", () => {
  let user = new NewUser();
  user.createUser();
  let peepList = new PeepList();
  peepList.getPeeps();
  let onePeep = new OnePeep();
  onePeep.getPeep(1);
});
