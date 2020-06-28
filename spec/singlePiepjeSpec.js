function testSinglePiepje() {
  peipjeNumber(2)
  setTimeout(() => {
    var peipBody = "Congrats for successfully requesting the peeps from the Chitter API! This is the first peep :)"
    expect(document.getElementById('body').innerHTML === `Peipje: ${peipBody}`, "single peipje body")
    expect(document.getElementById('user').innerHTML === "User: edward", "single peipje user")
    expect(document.getElementById('time').innerHTML === "Time: 2020-03-06T17:16:22.601Z", "single peipje time")
  }, 1000);
}
setTimeout(() => {
  testSinglePiepje()
}, 4000);
