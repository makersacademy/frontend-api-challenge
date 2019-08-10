function Peep() {
}

Peep.format = function(peep) {
  return(
    `<article>
    <p class='peep-handle'>${peep.user.handle}</p>
    <p class='peep-body'>${peep.body}</p>
    <p class='peep-date'>${peep.created_at.slice(0, 10).split('-').reverse().join('/')}</p>
    </article>`);
};
