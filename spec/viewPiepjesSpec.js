function testCanGetPeipjeDataFromAPI() {
  peipjesList()
  setTimeout(() => {
    console.log(document.getElementById('peipjesList').innerHTML)
    expect(document.getElementById('peipjesList').innerHTML === "qwer", "reading data from API")
  }, 200);
}
testCanGetPeipjeDataFromAPI()
