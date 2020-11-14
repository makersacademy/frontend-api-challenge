'use strict';

function exportPeepListAsHTML(peeps){
  let list = peeps.forEach(function (peep) {
    peep = `<li><div id='${peep.id}'><p>${peep.body}</p><br><i>${peep.user.handle}</i></div></li>`
    return "<ul>" + list + "</ul>"
  })
}
