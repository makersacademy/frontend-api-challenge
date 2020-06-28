function testCanGetPeipjeDataFromAPI() {
  peipjesList()
  setTimeout(() => {
    console.log(document.getElementById('peip0/body').innerHTML)
    expect(document.getElementById('peip0/body').innerHTML === "qwer", "reading data from API body")
    expect(document.getElementById('peip0/user').innerHTML === "qwer", "reading data from API user")
  }, 500);
}
testCanGetPeipjeDataFromAPI()
