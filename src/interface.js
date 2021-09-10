"use strict";

document.addEventListener("DOMContentLoaded", () => {
  let peepList = new PeepList();
  peepList.getPeeps();
  let onePeep = new OnePeep();
  onePeep.getPeep(1);
});
