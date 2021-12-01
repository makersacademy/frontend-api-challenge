/**
 * @jest-environment jsdom
 */

 test('adds a new user', () => {
  document.body.innerHTML = `<div>
  <ul class="banner" name="Sign up"><a href="/signup">Sign up</a><ul>
  <ul class="banner" name="Login"><a href="/login">Login</a><ul></ul>
  </div>`;

  require('./index')
  const button = document.querySelector('#add-post-btn')
  document.querySelector('input').value = 'hiya'
  console.log(document.querySelector('input').value)
  button.click()

  expect(document.querySelectorAll('.post').length).toBe(4);
  expect(document.querySelector('#post-4').innerText).toBe('hiya');
});