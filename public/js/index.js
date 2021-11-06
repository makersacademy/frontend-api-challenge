const peepList = document.getElementById('peep-list');

const fetchAllPeeps = (callback) => {
  fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
  .then(response => response.json()
  .then(peeps => callback(peeps)))
};

const showAllPeeps = (peeps) => {
  peeps.forEach((peep) => {
    peepList.appendChild(createPeepElement(peep));
  })
};

const createPeepElement = (peep) => {
  let peepElement = document.createElement('div');
  peepElement.setAttribute('class', 'peep');

  let profilePic = document.createElement('img');
  profilePic.setAttribute('src', '/images/red_egg.jpeg');
  profilePic.setAttribute('class', 'peep__author-pic');
  peepElement.appendChild(profilePic)

  let peepMainElement = document.createElement('div');
  peepMainElement.setAttribute('class', 'peep__main');
  peepElement.appendChild(peepMainElement);

  let peepHeaderElement = document.createElement('div');
  peepHeaderElement.setAttribute('class', 'peep__header');
  peepMainElement.appendChild(peepHeaderElement);

  let peepAuthorHandleElement = document.createElement('div');
  peepAuthorHandleElement.setAttribute('class', 'peep__author-handle');
  peepAuthorHandleElement.textContent = peep.user.handle
  peepHeaderElement.appendChild(peepAuthorHandleElement);

  let peepContentElement = document.createElement('div');
  peepContentElement.setAttribute('class', 'peep__content');
  let peepTextElement = document.createElement('div');
  peepTextElement.setAttribute('class', 'peep__text');
  peepTextElement.textContent = peep.body;
  peepContentElement.appendChild(peepTextElement);
  peepMainElement.appendChild(peepContentElement);

  let peepFooterElement = document.createElement('div');
  peepFooterElement.setAttribute('class', 'peep__footer');
  peepMainElement.appendChild(peepFooterElement);

  let likeIcon = document.createElement('img');
  likeIcon.setAttribute('src', '/images/like_icon.png');
  likeIcon.setAttribute('class', 'peep__like-icon')
  likeIcon.setAttribute('width', '18');
  likeIcon.setAttribute('height', '18');
  peepFooterElement.appendChild(likeIcon)

  let likeCountElement = document.createElement('div');
  likeCountElement.setAttribute('class', 'peep__like-count');
  peepFooterElement.appendChild(likeCountElement);

  return peepElement;
};

fetchAllPeeps((peeps) => showAllPeeps(peeps));
