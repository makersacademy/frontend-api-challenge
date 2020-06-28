function testCanGetPeipjeDataFromAPI() {
  peipjesList()
  setTimeout(() => {
    expect(document.getElementById('peip0/body').innerHTML === "qwer", "reading data from API body 1")
    expect(document.getElementById('peip0/user').innerHTML === "qwer", "reading data from API user 1")
    expect(document.getElementById('peip1/body').innerHTML === "asdf", "reading data from API body 2")
    expect(document.getElementById('peip1/user').innerHTML === "asdf", "reading data from API user 2")
  }, 1000);
}
testCanGetPeipjeDataFromAPI()

function testPeipsAreLinks() {
  peipjesList()
  document.getElementById('peip0').click()
  expect(window.location.hash.split('#')[1] === 'peipje/0', 'peips are links to individual pages')
}
setTimeout(() => {
  testPeipsAreLinks()
}, 1000)
