const displayPeeps = (jsonData) => {
  let count = 0
  let time_now = new Date();
  let peep_area = document.querySelector('#rightColumn')
  peep_area.innerHTML = ""
  
  while (count < 50) {
    let right_section = document.createElement('div')
    right_section.setAttribute('class', 'peep_right')

    let card = document.createElement('div')
    card.setAttribute('id', `peep_${count}`)
    card.setAttribute('class', 'peep_card')

    let image = document.createElement('img')
    image.setAttribute('id', `peep_photo_${count}`)
    image.setAttribute('src', './profile.png')
    image.setAttribute('class', 'peep_photo')

    let author = document.createElement('p')
    author.innerText = jsonData[count]["user"]["handle"]

    let content = document.createElement('p2')
    content.innerText = jsonData[count]["body"]

    let time_box = document.createElement('p')
    let peep_time = new Date(jsonData[count]["created_at"])
    let ms_ago = (time_now - peep_time)

    if ( ms_ago < 60_000 ) {
      let s_ago = Math.floor(ms_ago / 1000);
      time_box.innerText = `posted ${s_ago} second(s) ago`
    }
    else if ( ms_ago < 3_600_000 ) {
      let mi_ago = Math.floor(ms_ago / 60_000);
      time_box.innerText = `posted ${mi_ago} minute(s) ago`;
    }
    else if (ms_ago < 86_400_000 ) {
      let h_ago = Math.floor(ms_ago / 3_600_000);
      time_box.innerText = `posted ${h_ago} hour(s) ago`;
    }
    else {
      let d_ago = Math.floor(ms_ago / 86_400_000);
      time_box.innerText = `posted ${d_ago} day(s) ago`;
    }
    
    peep_area.appendChild(card)
    card.appendChild(image)
    card.appendChild(right_section)
    right_section.appendChild(author)
    right_section.appendChild(content)
    right_section.appendChild(time_box)

    count += 1
  }
  
}

module.exports = displayPeeps;