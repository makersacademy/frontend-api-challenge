document.addEventListener('DOMContentLoaded', () => {
  loadPeepsHistory();
  console.log(peepsDB);
  // function loadAllPeeps() {
  //   return fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       data.forEach(loadPeepDB);
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.warn('Peep history did not load', err);
  //     });
  // }

  // function loadPeepDB(data) {
  //   const link = document.createElement('a');
  //   link.href = `#${data.id}`;
  //   const div = document.createElement('div');
  //   div.className = 'peep-list';
  //   // div.innerHTML = formatPeepsHTML(peep);
  //   link.appendChild(div);
  //   document.querySelector('#all-peeps').appendChild(link);
  //   // peepsArray.push(peep);
  // }
});
