describe("CreateViews", () => {
  let createViews = new CreateViews();
  let peep;
  beforeEach(() => {
    peep = { id: 7, body: "red" };
    spyOn(createViews, "fillFields").and.returnValue(true);
    cleanPeepsContainer();
  });

  it("should add another inner child to the peepContainer", () => {
    createViews.add(peep, "John");
    let container = document.querySelector("#peepContainer");
    expect(container.children.length).toEqual(1);
  });
});
function cleanPeepsContainer() {
  document.querySelector("#peepContainer").innerHTML = "";
}
