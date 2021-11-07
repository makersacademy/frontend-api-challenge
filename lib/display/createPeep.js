const postPeep = require('../fetches/postPeep')
const getPeeps = require('../fetches/getPeeps')
const displayPeeps = require('./displayPeeps')

const createPeep = (session) => {
  let session_id = session.user_id;
  let session_key = session.session_key;
  let username = document.querySelector('#unInput').value;

  let left_column = document.querySelector('#leftColumn');
  left_column.innerHTML = "";

  let lb1 = document.createElement('br');
  left_column.appendChild(lb1);
  
  let logged_in_welcome_message = document.createElement('div');
  logged_in_welcome_message.setAttribute('id', 'loggedInWelcomeMessage');
  logged_in_welcome_message.innerHTML = `Welcome, ${username}`;
  left_column.appendChild(logged_in_welcome_message);

  let lb2 = document.createElement('br');
  left_column.appendChild(lb2);

  let text_instructions = document.createElement('div');
  text_instructions.setAttribute('id', 'textInstructions');
  text_instructions.innerHTML = "Write a peep below:";
  left_column.appendChild(text_instructions);

  let lb3 = document.createElement('br');
  left_column.appendChild(lb3);

  let text_area = document.createElement('textarea');
  text_area.setAttribute('id', 'textArea')
  left_column.appendChild(text_area);

  let lb4 = document.createElement('br');
  left_column.appendChild(lb4);

  let btn_post = document.createElement('button');
  btn_post.setAttribute('id', 'btnPost')
  btn_post.setAttribute('class', 'button');
  btn_post.innerHTML = 'Post peep';
  left_column.appendChild(btn_post);
  btn_post.addEventListener('click', () => {
    postPeep(session_id, session_key)
    getPeeps(displayPeeps);
  })
}

module.exports = createPeep;