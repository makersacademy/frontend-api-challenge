'use strict';

function exportPeepListAsHTML(peeps){
  let list = peeps.map(peep => `<li><div id='${peep.id}'><p>${peep.body}</p><br><i>${peep.user.handle}</i></div></li>`).join("");
  console.log(list)
  return "<ul>" + list + "</ul>"
}
